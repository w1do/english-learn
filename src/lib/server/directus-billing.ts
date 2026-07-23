import { setDefaultResultOrder } from 'node:dns';
import { UpstreamConnectionError } from './platega';

setDefaultResultOrder('ipv4first');

const directusUrl = (
  import.meta.env.DIRECTUS_URL ||
  import.meta.env.PUBLIC_DIRECTUS_URL ||
  'https://api.my-simple-english.ru'
).replace(/\/+$/, '');

interface DirectusResponse<T> {
  data: T;
}

export interface DirectusSubscription {
  id: string | number;
  user_id: string;
  transaction_id: string;
  expired_at: string | null;
  is_prologation: boolean;
}

function serviceHeaders(): HeadersInit {
  const token = import.meta.env.DIRECTUS_SERVICE_TOKEN?.trim();

  if (!token) {
    throw new Error('DIRECTUS_SERVICE_TOKEN is required');
  }

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

async function directusRequest<T>(
  path: string,
  init: RequestInit,
): Promise<T> {
  const response = await fetchDirectus(path, init);
  const body = (await response.json().catch(() => null)) as
    | DirectusResponse<T>
    | { errors?: Array<{ message?: string }> }
    | null;

  if (!response.ok || !body || !('data' in body)) {
    const message =
      body && 'errors' in body ? body.errors?.[0]?.message : null;
    throw new Error(message || `Directus request failed with ${response.status}`);
  }

  return body.data;
}

async function fetchDirectus(
  path: string,
  init: RequestInit,
  retrySafeRequest = false,
): Promise<Response> {
  const attempts = retrySafeRequest ? 2 : 1;
  let lastCode = 'NETWORK_ERROR';

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fetch(`${directusUrl}${path}`, {
        ...init,
        signal: AbortSignal.timeout(15_000),
      });
    } catch (error) {
      const cause =
        error instanceof Error && 'cause' in error
          ? (error.cause as { code?: string } | undefined)
          : undefined;
      lastCode = cause?.code || (error instanceof Error ? error.name : lastCode);
    }
  }

  throw new UpstreamConnectionError('Directus', lastCode);
}

export async function requireDirectusUser(
  authorization: string | null,
): Promise<string> {
  if (!authorization?.startsWith('Bearer ')) {
    throw new Response('Authentication required', { status: 401 });
  }

  const response = await fetchDirectus(
    '/users/me?fields=id',
    { headers: { Authorization: authorization } },
    true,
  );

  if (!response.ok) {
    throw new Response('Invalid Directus session', { status: 401 });
  }

  const body = (await response.json()) as DirectusResponse<{ id: string }>;

  if (!body.data?.id) {
    throw new Response('Invalid Directus user', { status: 401 });
  }

  return body.data.id;
}

export async function createSubscription(input: {
  userId: string;
  transactionId: string;
  isPrologation: boolean;
}): Promise<DirectusSubscription> {
  return directusRequest<DirectusSubscription>('/items/subscriptions', {
    method: 'POST',
    headers: serviceHeaders(),
    body: JSON.stringify({
      user_id: input.userId,
      transaction_id: input.transactionId,
      expired_at: null,
      is_prologation: input.isPrologation,
    }),
  });
}

export async function findSubscription(
  transactionId: string,
): Promise<DirectusSubscription | null> {
  const params = new URLSearchParams({
    'filter[transaction_id][_eq]': transactionId,
    fields: 'id,user_id,transaction_id,expired_at,is_prologation',
    limit: '1',
  });
  const items = await directusRequest<DirectusSubscription[]>(
    `/items/subscriptions?${params}`,
    { headers: serviceHeaders() },
  );

  return items[0] ?? null;
}

export async function updateSubscription(
  id: DirectusSubscription['id'],
  patch: Partial<Pick<DirectusSubscription, 'expired_at' | 'is_prologation'>>,
): Promise<void> {
  await directusRequest<DirectusSubscription>(
    `/items/subscriptions/${encodeURIComponent(String(id))}`,
    {
      method: 'PATCH',
      headers: serviceHeaders(),
      body: JSON.stringify(patch),
    },
  );
}
