import { useEffect, useRef } from 'react';

export default function ComicReader({ comic, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!comic) return null;

  return (
    <div
      className="reader-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="reader-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reader-title"
        style={{ '--card-bg': comic.palette.bg, '--card-accent': comic.palette.accent }}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="reader-close"
          onClick={onClose}
          aria-label="Close comic"
        >
          ×
        </button>
        <div className="reader-cover">
          <span className="comic-issue">{comic.issue}</span>
          <span className="comic-icon" aria-hidden="true">{comic.icon}</span>
          <span className="comic-pages">{comic.pages} pages</span>
        </div>
        <div className="reader-body">
          <h2 id="reader-title">{comic.title}</h2>
          <p className="reader-blurb">{comic.blurb}</p>
          <div className="reader-actions">
            <a
              href={comic.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-main"
            >
              📖 Read Now
            </a>
            <a href={comic.pdf} download className="download-btn">
              ⬇️ Download
            </a>
          </div>
          <p className="reader-tip">Tip: opens in a new tab — best on a big screen!</p>
        </div>
      </div>
    </div>
  );
}
