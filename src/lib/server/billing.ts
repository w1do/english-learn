import { createHash, timingSafeEqual } from 'node:crypto';
import { setDefaultResultOrder } from 'node:dns';
import type { BillingPlan } from '../billing/plans';
import { findBillingPlanByAmount } from '../billing/plans';

setDefaultResultOrder('ipv4first');

const directusUrl = (
  process.env.DIRECTUS_URL ||
  process.env.PUBLIC_DIRECTUS_URL ||
  'https://api.my-simple-english.ru'
).replace(/\/+$/, '');
const plategaUrl = (
  process.env.PLATEGA_BASE_URL || 'https://app.platega.io'
).replace(/\/+$/, '');

function addMonths(date: Date, months: number) {
  const result = new Date(date);
  const day = result.getUTCDate();
  result.setUTCDate(1);
  result.setUTCMonth(result.getUTCMonth() + months);
  const lastDay = new Date(
    Date.UTC(result.getUTCFullYear(), result.getUTCMonth() + 1, 0),
  ).getUTCDate();
  result.setUTCDate(Math.min(day, lastDay));
  return result;
}

export interface Subscription {
  id: string | number;
  user_id: string;
  transaction_id: string;
  expired_at: string | null;
  is_prologation: boolean;
}

export class UpstreamError extends Error {
  constructor(public readonly service: string, public readonly status = 503) {
    super(`${service} request failed`);
  }
}

function directusHeaders(): HeadersInit {
  const token = process.env.DIRECTUS_SERVICE_TOKEN?.trim();
  if (!token) throw new Error('DIRECTUS_SERVICE_TOKEN is required');
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

async function directus<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${directusUrl}${path}`, {
      ...init,
      signal: AbortSignal.timeout(15_000),
    });
  } catch {
    throw new UpstreamError('Directus');
  }

  const body = (await response.json().catch(() => null)) as
    | { data?: T; errors?: Array<{ message?: string }> }
    | null;
  if (!response.ok || !body || !('data' in body)) {
    throw new Error(body?.errors?.[0]?.message || `Directus ${response.status}`);
  }
  return body.data as T;
}

export async function currentUserId(authorization: string | null): Promise<string> {
  if (!authorization?.startsWith('Bearer ')) {
    throw new Response('Authentication required', { status: 401 });
  }
  let response: Response;
  try {
    response = await fetch(`${directusUrl}/users/me?fields=id`, {
      headers: { Authorization: authorization },
      signal: AbortSignal.timeout(15_000),
    });
  } catch {
    throw new UpstreamError('Directus');
  }
  if (!response.ok) throw new Response('Invalid Directus session', { status: 401 });
  const body = (await response.json()) as { data?: { id?: string } };
  if (!body.data?.id) throw new Response('Invalid Directus user', { status: 401 });
  return body.data.id;
}

async function platega<T>(path: string, payload: unknown): Promise<T> {
  const merchantId = process.env.PLATEGA_MERCHANT_ID?.trim();
  const secret = process.env.PLATEGA_SECRET?.trim();
  if (!merchantId || !secret) throw new Error('Platega credentials are not configured');

  let response: Response;
  try {
    response = await fetch(`${plategaUrl}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-MerchantId': merchantId,
        'X-Secret': secret,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
    });
  } catch {
    throw new UpstreamError('Platega');
  }
  const body = (await response.json().catch(() => null)) as
    | (T & { message?: string; error?: string })
    | null;
  if (!response.ok || !body) {
    throw new Error(body?.message || body?.error || `Platega ${response.status}`);
  }
  return body;
}

export async function startPayment(plan: BillingPlan, userId: string) {
  const returnUrl = process.env.PLATEGA_RETURN_URL?.trim();
  const failedUrl = process.env.PLATEGA_FAILED_URL?.trim();

  if (!plan.recurring && (!returnUrl || !failedUrl)) {
    throw new Error('Platega return URLs are not configured');
  }

  const result = plan.recurring
    ? await platega<{ transactionId: string; redirect?: string; url?: string }>(
        '/transaction/process',
        {
          paymentMethod: 2,
          paymentDetails: { amount: plan.amount, currency: 'RUB', interval: 3 },
          description: plan.description,
        },
      )
    : await platega<{ transactionId: string; redirect?: string; url?: string }>(
        '/v2/transaction/process',
        {
          paymentDetails: { amount: plan.amount, currency: 'RUB' },
          description: plan.description,
          return: returnUrl,
          failedUrl,
          payload: crypto.randomUUID(),
          metadata: { userId },
        },
      );

  const redirectUrl = result.redirect || result.url;
  if (!result.transactionId || !redirectUrl) throw new Error('Invalid Platega response');
  const redirect = new URL(redirectUrl);
  if (redirect.protocol !== 'https:' || redirect.hostname !== 'pay.platega.io') {
    throw new Error('Unsafe Platega redirect');
  }

  await directus<Subscription>('/items/subscriptions', {
    method: 'POST',
    headers: directusHeaders(),
    body: JSON.stringify({
      user_id: userId,
      transaction_id: result.transactionId,
      expired_at: null,
      is_prologation: plan.recurring,
    }),
  });
  return redirect.toString();
}

async function findSubscription(transactionId: string) {
  const query = new URLSearchParams({
    'filter[transaction_id][_eq]': transactionId,
    fields: 'id,user_id,transaction_id,expired_at,is_prologation',
    limit: '1',
  });
  const rows = await directus<Subscription[]>(`/items/subscriptions?${query}`, {
    headers: directusHeaders(),
  });
  return rows[0] || null;
}

async function updateSubscription(id: Subscription['id'], patch: Partial<Subscription>) {
  await directus(`/items/subscriptions/${encodeURIComponent(String(id))}`, {
    method: 'PATCH',
    headers: directusHeaders(),
    body: JSON.stringify(patch),
  });
}

function validSecret(headers: Headers) {
  const expectedMerchant = process.env.PLATEGA_MERCHANT_ID?.trim();
  const expectedSecret = process.env.PLATEGA_SECRET?.trim();
  const same = (actual: string | null, expected: string | undefined) => {
    if (!actual || !expected) return false;
    return timingSafeEqual(
      createHash('sha256').update(actual).digest(),
      createHash('sha256').update(expected).digest(),
    );
  };
  return same(headers.get('X-MerchantId'), expectedMerchant) &&
    same(headers.get('X-Secret'), expectedSecret);
}

export async function handleWebhook(
  request: Request,
  kind: 'payment' | 'charge' | 'status',
) {
  if (!validSecret(request.headers)) return new Response('Unauthorized', { status: 401 });
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return new Response('Invalid callback', { status: 400 });

  const transactionId = kind === 'payment' ? body.id : body.SubscriptionId || body.Id;
  const amount = kind === 'payment' ? body.amount : body.Amount;
  const status = kind === 'payment' ? body.status : body.Status;
  if (
    typeof transactionId !== 'string' ||
    typeof amount !== 'number' ||
    body[kind === 'payment' ? 'currency' : 'Currency'] !== 'RUB' ||
    typeof status !== 'string'
  ) return new Response('Invalid callback', { status: 400 });

  const subscription = await findSubscription(transactionId);
  if (!subscription) return new Response('Unknown transaction', { status: 404 });

  if (kind === 'status') {
    if (body.PaymentMethod !== 6) return new Response('Invalid callback', { status: 400 });
    if (status === 'SUBSCRIPTION_CANCELLED') {
      await updateSubscription(subscription.id, { is_prologation: false });
    }
    return new Response('OK');
  }

  const plan = findBillingPlanByAmount(amount, kind === 'charge');
  if (!plan || subscription.is_prologation !== (kind === 'charge')) {
    return new Response('Invalid transaction', { status: 400 });
  }
  if (status === 'CONFIRMED') {
    const expiry = kind === 'charge'
      ? new Date(String(body.NextChargeAt))
      : addMonths(new Date(), plan.durationMonths);
    if (!Number.isNaN(expiry.getTime()) &&
        (!subscription.expired_at || expiry > new Date(subscription.expired_at))) {
      await updateSubscription(subscription.id, { expired_at: expiry.toISOString() });
    }
  }
  return new Response('OK');
}
