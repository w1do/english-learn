import type { APIRoute } from 'astro';
import {
  findSubscription,
  updateSubscription,
} from '../../../../lib/server/directus-billing';
import { verifyPlategaWebhook } from '../../../../lib/server/platega';

export const prerender = false;

interface SubscriptionStatusCallback {
  Id?: unknown;
  SubscriptionId?: unknown;
  Amount?: unknown;
  Currency?: unknown;
  PaymentMethod?: unknown;
  Status?: unknown;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!verifyPlategaWebhook(request.headers)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = (await request.json().catch(() => null)) as
      | SubscriptionStatusCallback
      | null;

    if (
      !body ||
      typeof body.Id !== 'string' ||
      typeof body.Amount !== 'number' ||
      body.Currency !== 'RUB' ||
      body.PaymentMethod !== 6 ||
      typeof body.Status !== 'string' ||
      (body.SubscriptionId !== undefined &&
        body.SubscriptionId !== body.Id)
    ) {
      return new Response('Invalid callback', { status: 400 });
    }

    const subscription = await findSubscription(body.Id);

    if (!subscription) {
      return new Response('Unknown subscription', { status: 404 });
    }

    if (
      body.Status === 'SUBSCRIPTION_CANCELLED' &&
      subscription.is_prologation
    ) {
      await updateSubscription(subscription.id, {
        is_prologation: false,
      });
    }

    // Activation only confirms the mandate. Access is granted by charge callback.
    return new Response('OK');
  } catch (error) {
    console.error('Unable to process Platega status callback', error);
    return new Response('Temporary error', { status: 500 });
  }
};
