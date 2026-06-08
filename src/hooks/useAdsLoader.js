import { useEffect } from 'react';
import useConsent from './useConsent';

// Publisher ID is public (it's in ads.txt) — env override is supported for
// future flexibility. If unset, fall back to the historical client id so
// existing deploys keep working.
const CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT_ID || 'ca-pub-6482725806427470';
const SCRIPT_ID = 'adsense-loader';
let scriptInjected = false;

function injectAdsenseScript() {
  if (typeof document === 'undefined') return;
  if (scriptInjected || document.getElementById(SCRIPT_ID)) {
    scriptInjected = true;
    return;
  }
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(CLIENT_ID)}`;
  document.head.appendChild(script);
  scriptInjected = true;
}

export { CLIENT_ID };

// Returns `true` once consent is granted and the AdSense loader script has
// been requested. The per-slot `adsbygoogle.push({})` call lives in
// `AdSlot` so it runs once per <ins> element, after the element mounts.
export default function useAdsLoader() {
  const consent = useConsent();
  const ready = consent === 'granted';

  useEffect(() => {
    if (!ready) return;
    injectAdsenseScript();
  }, [ready]);

  return ready;
}
