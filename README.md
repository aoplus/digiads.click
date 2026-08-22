# DigiAds.click

Static Astro site for Cloudflare Pages/Workers Static Assets.

## Commands

`npm run dev` starts local development; `npm run check` validates Astro/TypeScript; `npm run build` creates `dist/`.

## Configuration

Business contact details and campaign pricing live in `src/config/site.ts`. Set `PUBLIC_GA_MEASUREMENT_ID` in the Cloudflare project environment to override the default public GA4 ID (`G-SSRW674JW7`). The Google tag is loaded once globally by `src/components/Base.astro`.

## Deployment

Connect the GitHub repository to a Cloudflare Pages project. Build command: `npm run build`; output directory: `dist`. For direct Worker Static Assets deployment, use `wrangler deploy` after authenticating with Cloudflare.
