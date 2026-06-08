import { useEffect } from 'react';
import useConsent from './useConsent';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-LGF133CWHQ';
const SCRIPT_ID = 'ga-loader';
let initialised = false;

function injectGaScript() {
  if (typeof document === 'undefined') return;
  if (initialised || document.getElementById(SCRIPT_ID)) {
    initialised = true;
    return;
  }
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, { anonymize_ip: true });

  initialised = true;
}

// Loads Google Analytics gtag.js only when the visitor has granted consent.
// No-op otherwise, including during SSR/prerender.
export default function useAnalytics() {
  const consent = useConsent();

  useEffect(() => {
    if (consent !== 'granted') return;
    injectGaScript();
  }, [consent]);
}
