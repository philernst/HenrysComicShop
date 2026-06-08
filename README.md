# Henry's Comic Shop

A free, ad-supported gallery of comics by Henry, built with React + Vite. Every route is prerendered to static HTML at build time so search engines (and the AdSense crawler) see real, route-specific content — not an empty SPA shell.

## Adding or editing comics

The comic library lives in `src/data/comics.js` — one entry per comic with `title`, `issue`, `blurb`, `icon` (emoji used on the generated cover), `palette` (cover colors), `pages`, and `pdf` (path to the PDF in `public/`). Drop a new PDF into `public/comics/` and point `pdf` at it, e.g. `pdf: '/comics/my-new-comic.pdf'`. Covers are generated from `icon` + `palette`, so no image file is required.

Series bios surface as an "About <series>" block on every comic page — edit `src/data/series.js` when you add a new series so the bio appears alongside the issues.

## Advertising (Google AdSense)

The site uses **manual** AdSense ad units, not Auto Ads. The script loader, the per-slot `<ins class="adsbygoogle">` markup, and the consent gating all live in the codebase so we can control where ads appear:

- `src/components/AdSlot.jsx` renders one ad unit. It only mounts when the visitor has granted consent **and** a slot ID is configured via env var. Every `<ins>` is tagged with `data-tag-for-child-directed-treatment="1"` and `data-tag-for-under-age-of-consent="1"` because the audience is kids.
- `src/hooks/useAdsLoader.js` injects `adsbygoogle.js` lazily on first AdSlot mount, only after consent. `src/hooks/useAnalytics.js` does the same for Google Analytics.
- Ad placements are intentionally limited to content-heavy pages: one on each comic page, one on `/about`, one on `/faq`. Home, hero, contact, privacy, and terms have no ads.
- `public/ads.txt` carries the publisher ID. The publisher ID is also overridable via `VITE_ADSENSE_CLIENT_ID`.

### Configuring slot IDs

In the [AdSense dashboard](https://www.google.com/adsense/), create one display ad unit per placement and copy its slot ID into a GitHub Actions secret. Slot env vars are optional — if a slot var is unset, the corresponding `AdSlot` renders nothing, so the site still works locally and during the AdSense review.

| Placement                       | Env var                       |
| ------------------------------- | ----------------------------- |
| Single comic page (mid-content) | `VITE_ADSENSE_SLOT_COMIC`     |
| `/about` (mid-content)          | `VITE_ADSENSE_SLOT_ABOUT`     |
| `/faq` (between questions)      | `VITE_ADSENSE_SLOT_FAQ`       |

Optional overrides: `VITE_ADSENSE_CLIENT_ID`, `VITE_GA_MEASUREMENT_ID`. See `.env.example` for the full list.

## Requesting an AdSense review

After AdSense flags a violation, do the following before re-requesting review:

1. **Turn off Auto Ads in the AdSense dashboard.** This codebase only uses manual ad units. If Auto Ads is on it will continue placing ads on routes (like the home page) that the policy considers low-content.
2. **Disable anchor and vignette ads in the dashboard** during the review window. These overlays are common policy triggers and are not worth the risk while a review is pending.
3. **Create the three ad units** listed in the table above and copy each slot ID into the matching GitHub Actions secret. Without slot IDs the `AdSlot` components render nothing, which is fine but means no ads will load even after the review passes.
4. **Confirm the trust pages are live** at `/about`, `/faq`, `/contact`, `/privacy`, and `/terms`.
5. **Do not touch `public/ads.txt`** during the review — changing the publisher ID can void the review.
6. **Submit only one re-review at a time** from the dashboard.
7. After approval, re-enable any dashboard-side settings (anchor/vignette) one at a time so it's easy to identify the cause if a new violation appears.

## Privacy, consent, and contact form

- `src/components/CookieConsent.jsx` is a small banner that records the visitor's choice in `localStorage`. Until the visitor accepts, neither AdSense nor Google Analytics is loaded.
- `src/pages/Contact.jsx` posts through [EmailJS](https://www.emailjs.com/) using the `VITE_EMAILJS_*` secrets (required by the deploy workflow). It enforces length limits, a 30-second cooldown, a 3-message-per-day cap, and a honeypot to deter spam.

## Build pipeline

`npm run build` runs three steps:

1. `vite build` — produces the client bundle in `dist/` and an `index.html` template with `<!--ssr-outlet-->` and `<!--ssr-head-->` placeholders.
2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` — produces a Node-loadable SSR bundle.
3. `node scripts/prerender.mjs` — imports the SSR bundle, renders every route to HTML, splices each result into the template, writes `dist/<path>/index.html`, generates `dist/sitemap.xml`, `dist/robots.txt`, `dist/404.html`, and cleans up `dist-ssr`.

Adding a new route means: add it to `STATIC_ROUTES` (or the comics list) in `src/router.js`, add a matching `case` in `App.jsx`'s `renderRoute()`, and the prerender picks it up automatically.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build + SSR prerender
- `npm run lint` — ESLint
- `npm run preview` — preview the production build

