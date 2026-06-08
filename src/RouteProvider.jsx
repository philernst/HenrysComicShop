import { useEffect, useState } from 'react';
import { RouteContext } from './RouteContext';
import { parseRoute, normalizeHash } from './router';

function readClientRoute() {
  if (typeof window === 'undefined') return { name: 'home' };
  const hash = window.location.hash;
  // Note: we normalise the URL itself inside the effect below, but the
  // initial route value here must already reflect the normalised path so
  // the very first render is correct.
  const normalised = normalizeHash(hash);
  if (normalised) return parseRoute(normalised);
  return parseRoute(window.location.pathname);
}

// RouteProvider is the client-side state owner. It seeds the route from
// `window.location` on first render, normalises any legacy hash URL to a
// real path (replaceState), listens for popstate, and intercepts in-app
// link clicks to do SPA navigation via history.pushState.
export default function RouteProvider({ children }) {
  const [route, setRoute] = useState(readClientRoute);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    // Normalise legacy `#/foo` URLs in the address bar so search engines +
    // the URL settle on a single canonical form. State is already seeded
    // from the normalised path in `readClientRoute`, so no setState here.
    const hash = window.location.hash;
    const normalised = normalizeHash(hash);
    if (normalised) {
      window.history.replaceState(null, '', normalised);
    }

    function onPop() {
      setRoute(parseRoute(window.location.pathname));
    }
    window.addEventListener('popstate', onPop);

    function onClick(event) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;
      const rawHref = anchor.getAttribute('href');
      if (!rawHref) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      if (
        rawHref.startsWith('http://') ||
        rawHref.startsWith('https://') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('tel:')
      ) {
        return;
      }

      let path = rawHref;
      if (rawHref.startsWith('#/')) {
        path = normalizeHash(rawHref) || '/';
      } else if (rawHref.startsWith('#')) {
        return;
      } else if (rawHref.startsWith('/')) {
        path = rawHref;
      } else {
        return;
      }

      const parsed = parseRoute(path);
      if (parsed.name === 'not-found') return;
      event.preventDefault();
      window.history.pushState(null, '', path);
      setRoute(parsed);
      window.scrollTo({ top: 0 });
    }

    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <RouteContext.Provider value={route}>{children}</RouteContext.Provider>
  );
}
