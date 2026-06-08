import useConsent, { setConsent } from '../hooks/useConsent';

export default function CookieConsent() {
  const consent = useConsent();

  if (consent !== null) return null;

  return (
    <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Cookies and ads notice">
      <div className="consent-banner-inner">
        <p className="consent-banner-text">
          We use cookies for site analytics and to show ads that keep the comics free.
          Read our <a href="/privacy">Privacy Policy</a> for the details.
        </p>
        <div className="consent-banner-actions">
          <button
            type="button"
            className="consent-btn consent-btn-decline"
            onClick={() => setConsent('declined')}
          >
            Decline
          </button>
          <button
            type="button"
            className="consent-btn consent-btn-accept"
            onClick={() => setConsent('granted')}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
