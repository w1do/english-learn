import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith('/uploads/')) {
    const s3BaseUrl = 'https://cloud.w1do.ru/english/uploads';
    const s3Url = s3BaseUrl + context.url.pathname;
    console.log(`[Middleware] Redirecting ${context.url.pathname} to ${s3Url}`);
    return context.redirect(s3Url, 302);
  }
  return next();
});
