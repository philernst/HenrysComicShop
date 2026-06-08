import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App.jsx';
import comics from './data/comics.js';
import { RouteContext } from './RouteContext.jsx';
import { HeadContext, createHeadCollector } from './HeadContext.jsx';
import { parseRoute, getAllPrerenderRoutes, routeToPath } from './router.js';

// Re-export the prerender route list (and routeToPath) so the prerender
// Node script can call them without re-implementing the route table.
export function listPrerenderRoutes() {
  return getAllPrerenderRoutes(comics).map((r) => ({
    route: r,
    path: routeToPath(r),
  }));
}

// Renders one route to an HTML string and captures the head metadata each
// page registered via `useHead`. The prerender script wraps the returned
// `html` in `index.html` and writes per-route folders.
export function render(url) {
  const route = parseRoute(url);
  const collector = createHeadCollector();
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={collector}>
        <RouteContext.Provider value={route}>
          <App />
        </RouteContext.Provider>
      </HeadContext.Provider>
    </StrictMode>,
  );
  return { html, head: collector.data, route };
}

// Render the dedicated 404 page (used for `dist/404.html`).
export function renderNotFound() {
  return render('/__not_found__');
}
