import type { APIRoute } from 'astro';
import { currentUserId, getUserSubscription, UpstreamError } from '../../../lib/server/billing';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const userId = await currentUserId(request.headers.get('Authorization'));
    const subscription = await getUserSubscription(userId);

    return Response.json({ subscription });
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    console.error('Unable to fetch subscription', error);

    if (error instanceof UpstreamError) {
      return Response.json({ error: `${error.service} сейчас недоступен. Попробуйте ещё раз.` }, { status: 503 });
    }

    return Response.json(
      { error: 'Не удалось получить данные о подписке.' },
      { status: 502 },
    );
  }
};
