import { useEffect } from 'react';

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;
const SCRIPT_ID = 'adsense-loader';

export default function AdScriptLoader() {
  useEffect(() => {
    if (!CLIENT) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`;
    document.head.appendChild(script);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: CLIENT,
        enable_page_level_ads: true,
        overlays: { bottom: true },
      });
    } catch (err) {
      console.error('AdSense Auto Ads init failed', err);
    }
  }, []);

  return null;
}
