# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Advertising (Google AdSense)

The site supports Google AdSense via env vars. When `VITE_ADSENSE_CLIENT` is unset, **no ad code runs at all** — local dev stays clean.

To enable ads:

1. Apply for and get approved at [Google AdSense](https://www.google.com/adsense/). Approval requires the site to be live.
2. Copy `.env.example` to `.env.local` and fill in:
   - `VITE_ADSENSE_CLIENT` — your `ca-pub-…` publisher ID.
   - `VITE_ADSENSE_SLOT_*` — numeric ad-unit slot IDs from AdSense → Ads → By ad unit. There are six slots (`TOP`, `POST_HERO`, `MID1`, `MID2`, `MID3`, `FOOTER`). Any slot left blank simply renders nothing.
3. Edit `public/ads.txt` and replace `pub-XXXXXXXXXXXXXXXX` with your real publisher ID. This file is required by programmatic ad buyers — without it CPMs drop a lot.
4. Rebuild and deploy.

**What gets enabled:**
- The AdSense loader script is injected once on mount.
- **Auto Ads** are turned on with `enable_page_level_ads` and bottom anchor overlays — Google may serve anchor ads (sticky bottom bar) and vignettes (full-page interstitials between page transitions) in addition to the manual slots. These are the highest-revenue formats.
- Six manual responsive slots are placed at high-CPM positions: above the hero, between every pair of content sections, and above the footer.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
