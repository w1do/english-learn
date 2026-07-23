import type { APIRoute } from 'astro';
import { handleWebhook } from '../../../../lib/server/billing';

export const prerender = false;
export const POST: APIRoute = ({ request }) => handleWebhook(request, 'status');
