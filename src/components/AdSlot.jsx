import { useEffect, useRef } from 'react';

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;

export default function AdSlot({ slot, format = 'auto', fullWidthResponsive = true, style }) {
  const insRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!CLIENT || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (err) {
      console.error('AdSense push failed', err);
    }
  }, [slot]);

  if (!CLIENT || !slot) return null;

  return (
    <div className="ad-slot" style={style}>
      <span className="ad-slot__label">Advertisement</span>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}
