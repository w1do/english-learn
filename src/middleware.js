import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith('/uploads/')) {
    const s3BaseUrl = process.env.MINIO || 'https://cloud.w1do.ru/english';
    const s3Url = s3BaseUrl + context.url.pathname;
    
    try {
      // Используем fetch для проксирования запроса. 
      // Это позволяет использовать внутренние адреса Docker (напр. http://minio:9000)
      // и скрывает реальный адрес хранилища от клиента.
      const response = await fetch(s3Url, {
        headers: context.request.headers
      });

      return new Response(response.body, {
        status: response.status,
        headers: response.headers
      });
    } catch (e) {
      console.error(`[Middleware] Proxy error for ${s3Url}:`, e);
      return new Response("Asset not found", { status: 404 });
    }
  }
  return next();
});
