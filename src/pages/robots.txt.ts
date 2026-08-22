import type { APIRoute } from 'astro'; export const GET: APIRoute=()=>new Response('User-agent: *\nAllow: /\nSitemap: https://digiads.click/sitemap-index.xml\n');
