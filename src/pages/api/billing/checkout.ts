import type { APIRoute } from 'astro';
import { getBillingPlan } from '../../../lib/billing/plans';
import {
  createSubscription,
  requireDirectusUser,
} from '../../../lib/server/directus-billing';
import {
  createOneTimePayment,
  createRecurringPayment,
  UpstreamConnectionError,
  UpstreamHttpError,
} from '../../../lib/server/platega';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const userId = await requireDirectusUser(
      request.headers.get('Authorization'),
    );
    const body = (await request.json().catch(() => null)) as
      | { planId?: unknown }
      | null;
    const plan = getBillingPlan(body?.planId);

    if (!plan) {
      return Response.json({ error: 'Неизвестный тариф' }, { status: 400 });
    }

    const payment = plan.recurring
      ? await createRecurringPayment({
          amount: plan.amount,
          description: plan.description,
        })
      : await createOneTimePayment({
          amount: plan.amount,
          description: plan.description,
          userId,
          payload: crypto.randomUUID(),
        });
    const redirectUrl = payment.redirect || payment.url;

    if (!payment.transactionId || !redirectUrl) {
      throw new Error('Platega returned an invalid checkout response');
    }

    const redirect = new URL(redirectUrl);

    if (redirect.protocol !== 'https:') {
      throw new Error('Platega returned an unsafe redirect URL');
    }

    await createSubscription({
      userId,
      transactionId: payment.transactionId,
      isPrologation: plan.recurring,
    });

    return Response.json({ redirectUrl: redirect.toString() });
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    console.error('Unable to create Platega checkout', error);

    if (error instanceof UpstreamConnectionError) {
      return Response.json(
        {
          error: `${error.service} сейчас недоступен (${error.code}). Попробуйте ещё раз.`,
        },
        { status: 503 },
      );
    }

    if (error instanceof UpstreamHttpError) {
      return Response.json(
        {
          error:
            error.providerMessage ||
            `Платёжный сервис отклонил запрос (${error.status}).`,
        },
        { status: 502 },
      );
    }

    return Response.json(
      { error: 'Не удалось перейти к оплате. Попробуйте ещё раз.' },
      { status: 502 },
    );
  }
};
