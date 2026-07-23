import type { APIRoute } from 'astro';
import { getBillingPlan } from '../../../lib/billing/plans';
import { currentUserId, startPayment, UpstreamError } from '../../../lib/server/billing';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const userId = await currentUserId(request.headers.get('Authorization'));
    const body = (await request.json().catch(() => null)) as
      | { planId?: unknown }
      | null;
    const plan = getBillingPlan(body?.planId);

    if (!plan) {
      return Response.json({ error: 'Неизвестный тариф' }, { status: 400 });
    }

    return Response.json({ redirectUrl: await startPayment(plan, userId) });
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    console.error('Unable to create Platega checkout', error);

    if (error instanceof UpstreamError) {
      return Response.json({ error: `${error.service} сейчас недоступен. Попробуйте ещё раз.` }, { status: 503 });
    }

    return Response.json(
      { error: 'Не удалось перейти к оплате. Попробуйте ещё раз.' },
      { status: 502 },
    );
  }
};
