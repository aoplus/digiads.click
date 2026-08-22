import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({ site: 'https://digiads.click', output: 'static', adapter: cloudflare() });
