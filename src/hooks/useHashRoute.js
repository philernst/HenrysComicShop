import { useEffect, useState } from 'react';

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw || raw === '/') return { name: 'home' };
  const match = raw.match(/^\/comic\/([\w-]+)$/);
  if (match) return { name: 'comic', id: match[1] };
  return { name: 'home' };
}

export default function useHashRoute() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    function onChange() {
      setRoute(parseHash());
      window.scrollTo({ top: 0 });
    }
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
