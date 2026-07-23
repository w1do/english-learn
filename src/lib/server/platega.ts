import { createHash, timingSafeEqual } from 'node:crypto';
import { setDefaultResultOrder } from 'node:dns';

setDefaultResultOrder('ipv4first');

const baseUrl = (
  import.meta.env.PLATEGA_BASE_URL || 'https://app.platega.io'
).replace(/\/+$/, '');

function credentials() {
  const merchantId = import.meta.env.PLATEGA_MERCHANT_ID?.trim();
  const secret = import.meta.env.PLATEGA_SECRET?.trim();

  if (!merchantId || !secret) {
    throw new Error('Platega credentials are not configured');
  }

  return { merchantId, secret };
}

async function requestPlatega<T>(path: string, body: unknown): Promise<T> {
  const { merchantId, secret } = credentials();
  let response: Response;

  try {
    response = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-MerchantId': merchantId,
        'X-Secret': secret,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (error) {
    const cause =
      error instanceof Error && 'cause' in error
        ? (error.cause as { code?: string } | undefined)
        : undefined;
    throw new UpstreamConnectionError(
      'Platega',
      cause?.code || (error instanceof Error ? error.name : 'NETWORK_ERROR'),
    );
  }

  const result = (await response.json().catch(() => null)) as
    | (T & { message?: unknown; error?: unknown })
    | null;

  if (!response.ok || !result) {
    const providerMessage =
      result && typeof result.message === 'string'
        ? result.message
        : result && typeof result.error === 'string'
          ? result.error
          : null;

    throw new UpstreamHttpError('Platega', response.status, providerMessage);
  }

  return result;
}

export class UpstreamConnectionError extends Error {
  constructor(
    public readonly service: string,
    public readonly code: string,
  ) {
    super(`${service} connection failed (${code})`);
    this.name = 'UpstreamConnectionError';
  }
}

export class UpstreamHttpError extends Error {
  constructor(
    public readonly service: string,
    public readonly status: number,
    public readonly providerMessage: string | null,
  ) {
    super(
      `${service} returned HTTP ${status}${
        providerMessage ? `: ${providerMessage.slice(0, 300)}` : ''
      }`,
    );
    this.name = 'UpstreamHttpError';
  }
}

export interface PlategaCreateResult {
  transactionId: string;
  redirect?: string;
  url?: string;
  status: string;
}

export function createRecurringPayment(input: {
  amount: number;
  description: string;
}): Promise<PlategaCreateResult> {
  return requestPlatega('/transaction/process', {
    paymentMethod: 6,
    paymentDetails: {
      amount: input.amount,
      currency: 'RUB',
      interval: 3,
    },
    description: input.description,
  });
}

export function createOneTimePayment(input: {
  amount: number;
  description: string;
  userId: string;
  payload: string;
}): Promise<PlategaCreateResult> {
  const returnUrl = import.meta.env.PLATEGA_RETURN_URL?.trim();
  const failedUrl = import.meta.env.PLATEGA_FAILED_URL?.trim();

  if (!returnUrl || !failedUrl) {
    throw new Error('Platega return URLs are not configured');
  }

  return requestPlatega('/v2/transaction/process', {
    paymentDetails: { amount: input.amount, currency: 'RUB' },
    description: input.description,
    return: returnUrl,
    failedUrl,
    payload: input.payload,
    metadata: { userId: input.userId },
  });
}

function secureEqual(actual: string, expected: string): boolean {
  const actualHash = createHash('sha256').update(actual).digest();
  const expectedHash = createHash('sha256').update(expected).digest();
  return timingSafeEqual(actualHash, expectedHash);
}

export function verifyPlategaWebhook(headers: Headers): boolean {
  const { merchantId, secret } = credentials();
  const actualMerchantId = headers.get('X-MerchantId');
  const actualSecret = headers.get('X-Secret');

  return Boolean(
    actualMerchantId &&
      actualSecret &&
      secureEqual(actualMerchantId, merchantId) &&
      secureEqual(actualSecret, secret),
  );
}

export function addMonths(date: Date, months: number): Date {
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
