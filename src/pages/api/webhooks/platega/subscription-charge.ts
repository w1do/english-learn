import type { APIRoute } from 'astro';
import { findBillingPlanByAmount } from '../../../../lib/billing/plans';
import {
  findSubscription,
  updateSubscription,
} from '../../../../lib/server/directus-billing';
import { verifyPlategaWebhook } from '../../../../lib/server/platega';

export const prerender = false;

interface ChargeCallback {
  SubscriptionId?: unknown;
  Amount?: unknown;
  Currency?: unknown;
  Status?: unknown;
  NextChargeAt?: unknown;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!verifyPlategaWebhook(request.headers)) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = (await request.json().catch(() => null)) as
      | ChargeCallback
      | null;

    if (
      !body ||
      typeof body.SubscriptionId !== 'string' ||
      typeof body.Amount !== 'number' ||
      body.Currency !== 'RUB' ||
      typeof body.Status !== 'string'
    ) {
      return new Response('Invalid callback', { status: 400 });
    }

    const subscription = await findSubscription(body.SubscriptionId);

    if (!subscription || !subscription.is_prologation) {
      return new Response('Unknown subscription', { status: 404 });
    }

    const plan = findBillingPlanByAmount(body.Amount, true);

    if (!plan) {
      return new Response('Amount mismatch', { status: 400 });
    }

    if (body.Status === 'CONFIRMED') {
      if (typeof body.NextChargeAt !== 'string') {
        return new Response('NextChargeAt is required', { status: 400 });
      }

      const nextChargeAt = new Date(body.NextChargeAt);

      if (Number.isNaN(nextChargeAt.getTime())) {
        return new Response('Invalid NextChargeAt', { status: 400 });
      }

      if (
        !subscription.expired_at ||
        nextChargeAt.getTime() > new Date(subscription.expired_at).getTime()
      ) {
        await updateSubscription(subscription.id, {
          expired_at: nextChargeAt.toISOString(),
        });
      }
    }

    return new Response('OK');
  } catch (error) {
    console.error('Unable to process Platega charge callback', error);
    return new Response('Temporary error', { status: 500 });
  }
};
