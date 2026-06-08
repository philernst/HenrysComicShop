#!/usr/bin/env node
// Prerender every known route to a static `dist/<path>/index.html` so search
// engines (and AdSense) see real, route-specific HTML — not the empty SPA
// shell. Also writes sitemap.xml, robots.txt, and a real 404.html.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SSR_DIST = join(ROOT, 'dist-ssr');
const SITE_URL = 'https://henryscomicshop.com';

function escapeHtml(value) {
  if (value == null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// JSON-LD escaping: only `<` and `</` need to be guarded inside <script>.
function escapeJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function buildHeadHtml(head) {
  const parts = [];
  if (head.title) parts.push(`<meta property="og:title" content="${escapeHtml(head.title)}" />`);
  if (head.description) parts.push(`<meta property="og:description" content="${escapeHtml(head.description)}" />`);
  parts.push('<meta property="og:type" content="website" />');
  if (head.canonical) {
    parts.push(`<link rel="canonical" data-managed="head" href="${escapeHtml(head.canonical)}" />`);
    parts.push(`<meta property="og:url" content="${escapeHtml(head.canonical)}" />`);
  }
  if (head.ogImage) {
    parts.push(`<meta property="og:image" content="${escapeHtml(head.ogImage)}" />`);
    parts.push('<meta property="twitter:card" content="summary_large_image" />');
  } else {
    parts.push('<meta property="twitter:card" content="summary" />');
  }
  if (head.jsonLd) {
    parts.push(
      `<script type="application/ld+json" data-managed="head">${escapeJsonLd(head.jsonLd)}</script>`,
    );
  }
  return parts.join('\n    ');
}

function applyHeadToTemplate(template, head) {
  let out = template;
  // Replace title (the template ships with a fallback so the regex always matches).
  if (head.title) {
    out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(head.title)}</title>`);
  }
  // Replace description meta if a head one was registered; otherwise leave the default.
  if (head.description) {
    out = out.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeHtml(head.description)}" />`,
    );
  }
  const extraHead = buildHeadHtml(head);
  out = out.replace('<!--ssr-head-->', extraHead);
  return out;
}

function pathToOutputFile(path) {
  if (path === '/' || path === '') return join(DIST, 'index.html');
  const trimmed = path.replace(/^\/+|\/+$/g, '');
  return join(DIST, trimmed, 'index.html');
}

async function main() {
  if (!existsSync(DIST)) {
    throw new Error(`Expected ${DIST} to exist. Run "vite build" first.`);
  }
  if (!existsSync(SSR_DIST)) {
    throw new Error(`Expected ${SSR_DIST} to exist. Run "vite build --ssr" first.`);
  }

  const templatePath = join(DIST, 'index.html');
  const template = await readFile(templatePath, 'utf8');

  const entryPath = join(SSR_DIST, 'entry-server.js');
  if (!existsSync(entryPath)) {
    throw new Error(`Expected ${entryPath} to exist.`);
  }
  const mod = await import(pathToFileURL(entryPath).href);
  const { render, renderNotFound, listPrerenderRoutes } = mod;

  const routes = listPrerenderRoutes();
  const written = [];

  for (const { path } of routes) {
    const { html, head } = render(path);
    const finalHtml = applyHeadToTemplate(template, head).replace('<!--ssr-outlet-->', html);
    const outFile = pathToOutputFile(path);
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, finalHtml, 'utf8');
    written.push(path);
    process.stdout.write(`  prerendered ${path}\n`);
  }

  // 404 page lives at dist/404.html so GH Pages serves it for unknown URLs.
  const nf = renderNotFound();
  const notFoundHtml = applyHeadToTemplate(template, nf.head).replace('<!--ssr-outlet-->', nf.html);
  await writeFile(join(DIST, '404.html'), notFoundHtml, 'utf8');
  process.stdout.write('  prerendered /404\n');

  // sitemap.xml — list all canonical URLs we just rendered (skip the 404).
  const sitemapEntries = routes
    .map(({ path }) => {
      const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
      return `  <url><loc>${escapeHtml(loc)}</loc></url>`;
    })
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;
  await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');
  process.stdout.write('  wrote sitemap.xml\n');

  const robots = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  await writeFile(join(DIST, 'robots.txt'), robots, 'utf8');
  process.stdout.write('  wrote robots.txt\n');

  // Clean up the intermediate SSR bundle so it's never published to GH Pages.
  await rm(SSR_DIST, { recursive: true, force: true });
  process.stdout.write(`  cleaned ${SSR_DIST}\n`);

  process.stdout.write(`\nPrerendered ${written.length} routes + 404.\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
