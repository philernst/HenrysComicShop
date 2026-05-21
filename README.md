# Henry's Comic Shop

A free, ad-supported gallery of comics by Henry, built with React + Vite.

## Adding or editing comics

The comic library lives in `src/data/comics.js` — one entry per comic with `title`, `issue`, `blurb`, `icon` (emoji used on the generated cover), `palette` (cover colors), `pages`, and `pdf` (path to the PDF in `public/`). Drop a new PDF into `public/comics/` and point `pdf` at it, e.g. `pdf: '/comics/my-new-comic.pdf'`. Covers are generated from `icon` + `palette`, so no image file is required.

## Advertising (Google AdSense)

The AdSense loader is in `index.html` and `public/ads.txt` carries the publisher ID. Ad placements are handled entirely by **Auto Ads** in the [AdSense dashboard](https://www.google.com/adsense/) — no per-slot configuration in the codebase. To change ad behavior (formats, density, anchor/vignette overlays), edit settings in AdSense, not the code.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run preview` — preview the production build

