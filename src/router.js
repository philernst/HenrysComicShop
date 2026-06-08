// Route parsing + serialization. Pure functions so they can run in both the
// browser and a Node SSR build.

export const STATIC_ROUTES = ['about', 'faq', 'privacy', 'terms', 'contact'];

export function parseRoute(input) {
  if (!input) return { name: 'home' };
  let raw;
  if (typeof input === 'string') {
    raw = input.startsWith('#') ? input.slice(1) : input;
  } else if (typeof input === 'object') {
    raw = input.pathname || '/';
  } else {
    return { name: 'home' };
  }
  // Strip query string and hash
  const qIndex = raw.indexOf('?');
  if (qIndex !== -1) raw = raw.slice(0, qIndex);
  const hIndex = raw.indexOf('#');
  if (hIndex !== -1) raw = raw.slice(0, hIndex);

  if (!raw || raw === '/' || raw === '') return { name: 'home' };

  const trimmed = raw.replace(/^\/+|\/+$/g, '');
  if (trimmed === '') return { name: 'home' };

  const comicMatch = trimmed.match(/^comic\/([\w-]+)$/);
  if (comicMatch) return { name: 'comic', id: comicMatch[1] };
  if (STATIC_ROUTES.includes(trimmed)) return { name: trimmed };

  return { name: 'not-found' };
}

export function routeToPath(route) {
  if (!route || route.name === 'home') return '/';
  if (route.name === 'comic') return `/comic/${route.id}`;
  if (route.name === 'not-found') return '/404';
  return `/${route.name}`;
}

// Best-effort: if the user landed via a legacy `#/foo` URL, convert it to
// the path equivalent. Used both for normalization (history.replaceState)
// and for parsing inbound clicks on links that still use the hash style.
export function normalizeHash(rawHash) {
  if (!rawHash || !rawHash.startsWith('#')) return null;
  if (!rawHash.startsWith('#/')) return null;
  const route = parseRoute(rawHash);
  if (route.name === 'not-found') return null;
  return routeToPath(route);
}

export function getAllPrerenderRoutes(comics) {
  return [
    { name: 'home' },
    ...STATIC_ROUTES.map((name) => ({ name })),
    ...comics.map((c) => ({ name: 'comic', id: c.id })),
  ];
}
