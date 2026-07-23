import type { APIRoute } from 'astro';
import { findBillingPlanByAmount } from '../../../../lib/billing/plans';
import {
  findSubscription,
  updateSubscription,
} from '../../../../lib/server/directus-billing';
import {
  addMonths,
  verifyPlategaWebhook,
} from '../../../../lib/server/platega';

export const prerender = false;

interface PaymentCallback {
  id?: unknown;
  amount?: unknown;
  currency?: unknown;
  status?: unknown;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!verifyPlategaWebhook(request.headers)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = (await request.json().catch(() => null)) as
      | PaymentCallback
      | null;

    if (
      !body ||
      typeof body.id !== 'string' ||
      typeof body.amount !== 'number' ||
      body.currency !== 'RUB' ||
      typeof body.status !== 'string'
    ) {
      return new Response('Invalid callback', { status: 400 });
    }

    const subscription = await findSubscription(body.id);

    if (!subscription || subscription.is_prologation) {
      return new Response('Unknown transaction', { status: 404 });
    }

    const plan = findBillingPlanByAmount(body.amount, false);

    if (!plan) {
      return new Response('Amount mismatch', { status: 400 });
    }

    if (body.status === 'CONFIRMED' && !subscription.expired_at) {
      await updateSubscription(subscription.id, {
        expired_at: addMonths(new Date(), plan.durationMonths).toISOString(),
      });
    }

    return new Response('OK');
  } catch (error) {
    console.error('Unable to process Platega payment callback', error);
    return new Response('Temporary error', { status: 500 });
  }
};
