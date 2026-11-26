import type { APIRoute } from 'astro';
// Search and AI-search crawlers are explicitly allowed. The sitemap is served at /sitemap.xml.
const agents = ['Googlebot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot'];
export const GET: APIRoute = () => new Response(
  agents.map((a) => `User-agent: ${a}\nAllow: /\n`).join('\n') + '\nUser-agent: *\nAllow: /\n\nSitemap: https://digiads.click/sitemap.xml\n',
  { headers: { 'content-type': 'text/plain; charset=utf-8' } },
);
