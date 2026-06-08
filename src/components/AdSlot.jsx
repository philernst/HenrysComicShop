import { useEffect, useRef } from 'react';
import useAdsLoader, { CLIENT_ID } from '../hooks/useAdsLoader';

// AdSlot renders a single explicit AdSense ad unit. It only renders the
// underlying <ins> element when (a) the visitor has granted consent, and
// (b) a slot ID has been configured via env var. That keeps Google's
// crawler from seeing empty ad slots and avoids violating the "ads on
// screens without publisher content" policy: AdSlot is only placed on
// content-heavy routes (ComicPage, About, FAQ).
//
// Each <ins> is tagged for child-directed treatment so AdSense serves
// non-personalised ads, since the site is aimed at kids.
export default function AdSlot({
  slot,
  format = 'auto',
  responsive = true,
  layout,
  className = '',
  style,
  label = 'Advertisement',
}) {
  const ready = useAdsLoader();
  const insRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ready || !slot || pushed.current) return;
    // The hook already does an initial push, but we also push when a slot
    // mounts so dynamically-revealed slots (e.g. after route change) render.
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // ignore
    }
  }, [ready, slot]);

  if (!slot) return null;
  if (!ready) return null;

  return (
    <aside className={`ad-slot ${className}`.trim()} aria-label={label}>
      <span className="ad-slot-label">{label}</span>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        data-ad-layout={layout}
        data-tag-for-child-directed-treatment="1"
        data-tag-for-under-age-of-consent="1"
      />
    </aside>
  );
}
