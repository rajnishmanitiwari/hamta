# The Hamta Homestay, Manali (hamta.in)

Fast, framework-free static website. White, editorial, mountain-first.

## Edit
- Contact, rates, form endpoint: `assets/js/config.js` (single source; rates drive the booking estimator).
- Page copy and layout: `scripts/build.mjs`. Run `node scripts/build.mjs` (Node 18+, no dependencies) to regenerate the `*.html` files and `sitemap.xml`. Commit the generated files; hosting needs no build step.
- Styles: `assets/css/site.css`. Behaviour: `assets/js/site.js`.
- Photos: `assets/img/<name>.webp` (1600px) and `<name>-sm.webp` (800px). Hero video: `assets/video/hero.mp4`.

## Deploy
Static output at repo root. On Vercel: Framework "Other". The project runs `npm run build` (regenerates HTML via `scripts/build.mjs`) with env `HAMTA_LIVE=1` (Production) so pages are indexable; without it the build outputs PREVIEW/noindex HTML. `vercel.json` must keep `"outputDirectory": "."` - bundle re-syncs must preserve it or deployments fail. `vercel.json` also sets clean URLs and caching.

## Forms
Guest data goes by email through FormSubmit (third-party, disclosed on /privacy and the forms). Booking and contact forms POST JSON to `formEndpoint` (FormSubmit AJAX by default, sending to `bookings@hamta.in`). The first submission triggers a one-time activation email to that address; click it once. No payment is taken on the site.

## Review state
Default `node scripts/build.mjs` makes a PREVIEW: `noindex`, `robots.txt` disallow, red PREVIEW tag. Publish with `HAMTA_LIVE=1 node scripts/build.mjs` only after owner approval. Forms are disabled (`formLive:false` in config.js) and say nothing was sent until delivery is activated and tested.

## Pending owner details (do not invent)
WhatsApp/phone, check-in/out times, deposit and cancellation terms, taxes, peak-date rates, house rules (pets, children, smoking, alcohol), final menu. Policy pages say terms are confirmed in the booking message until then.
