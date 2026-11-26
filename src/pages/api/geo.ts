import type { APIRoute } from 'astro';

// Country for the visitor, read from Cloudflare's header. Used only to pick a display currency on the client.
// No redirects, no user-agent checks. Always uncached so a cached answer never shows the wrong currency.
export const prerender = false;
export const GET: APIRoute = ({ request }) => {
  const country = (request.headers.get('CF-IPCountry') || '').toUpperCase().slice(0, 2) || 'XX';
  return new Response(JSON.stringify({ country }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
};
