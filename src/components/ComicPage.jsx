import { useEffect } from 'react';
import { getComicById, getRelatedComics, getSeriesNeighbors } from '../data/comics';
import ComicCard from './ComicCard';

export default function ComicPage({ id }) {
  const comic = getComicById(id);

  useEffect(() => {
    if (comic) {
      document.title = `${comic.title} ${comic.issue} · Henry's Comic Shop`;
    }
    return () => {
      document.title = "Henry's Comic Shop";
    };
  }, [comic]);

  if (!comic) {
    return (
      <section className="comic-page">
        <h2 className="section-title">Comic not found</h2>
        <p className="gallery-intro">That comic doesn&apos;t seem to exist. Maybe it was eaten by a moon pirate.</p>
        <a href="#/" className="btn-main">← Back to the Vault</a>
      </section>
    );
  }

  const related = getRelatedComics(comic.id, 3);
  const { prev, next, index, total } = getSeriesNeighbors(comic);
  const hasSeriesNav = Boolean(prev || next);
  const pages = Array.isArray(comic.pages) && comic.pages.length > 0 ? comic.pages : null;
  const fileUrl = (pages && pages[0]) || comic.image || comic.pdf;
  const isImage = Boolean(pages || comic.image);
  const downloadLabel = isImage ? '⬇️ Download Image' : '⬇️ Download PDF';

  return (
    <article className="comic-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="#/">← The Comic Vault</a>
      </nav>

      {hasSeriesNav && (
        <nav
          className="series-nav-pill"
          aria-label={`${comic.title} series navigation`}
        >
          {prev ? (
            <a
              href={`#/comic/${prev.id}`}
              className="series-nav-pill-link series-nav-pill-prev"
              aria-label={`Previous: ${prev.title} ${prev.issue}`}
            >
              <span className="series-nav-pill-arrow" aria-hidden="true">←</span>
              <span className="series-nav-pill-label">
                <span className="series-nav-pill-direction">Prev</span>
                <span className="series-nav-pill-issue">{prev.issue}</span>
              </span>
            </a>
          ) : (
            <span className="series-nav-pill-link series-nav-pill-empty" aria-hidden="true" />
          )}
          <span className="series-nav-pill-meta">
            <span className="series-nav-pill-title">{comic.title}</span>
            {total > 1 && (
              <span className="series-nav-pill-count">Issue {index + 1} of {total}</span>
            )}
          </span>
          {next ? (
            <a
              href={`#/comic/${next.id}`}
              className="series-nav-pill-link series-nav-pill-next"
              aria-label={`Next: ${next.title} ${next.issue}`}
            >
              <span className="series-nav-pill-label">
                <span className="series-nav-pill-direction">Next</span>
                <span className="series-nav-pill-issue">{next.issue}</span>
              </span>
              <span className="series-nav-pill-arrow" aria-hidden="true">→</span>
            </a>
          ) : (
            <span className="series-nav-pill-link series-nav-pill-empty" aria-hidden="true" />
          )}
        </nav>
      )}

      <header
        className="comic-page-hero"
        style={{ '--card-bg': comic.palette.bg, '--card-accent': comic.palette.accent }}
      >
        <div className="comic-page-cover">
          <span className="comic-issue">{comic.issue}</span>
          <span className="comic-icon" aria-hidden="true">{comic.icon}</span>
        </div>
        <div className="comic-page-title">
          <h2>{comic.title}</h2>
          <p className="comic-page-blurb">{comic.blurb}</p>
          <div className="comic-page-actions">
            <a href="#reader" className="btn-main">📖 Jump to Reader</a>
            <a href={fileUrl} download className="download-btn">{downloadLabel}</a>
          </div>
        </div>
      </header>

      <section className="comic-section">
        <h3 className="comic-section-title">The Story</h3>
        {comic.synopsis.map((para, i) => (
          <p key={i} className="comic-paragraph">{para}</p>
        ))}
      </section>

      <section className="comic-section">
        <h3 className="comic-section-title">Meet the Cast</h3>
        <ul className="character-list">
          {comic.characters.map((c) => (
            <li key={c.name} className="character-card">
              <strong>{c.name}</strong>
              <span>{c.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="comic-section">
        <h3 className="comic-section-title">A Note from Henry</h3>
        <blockquote className="creator-note">{comic.creatorsNote}</blockquote>
      </section>

      <section className="comic-section" id="reader">
        <h3 className="comic-section-title">Read It Now</h3>
        <p className="comic-paragraph">{pages ? (
          <>Scroll through every page below. Tap or click a page to see it full-size, or <a href={fileUrl} target="_blank" rel="noopener noreferrer">open page 1 in a new tab</a>.</>
        ) : isImage ? (
          <>Tap or click the comic to see it full-size. You can also <a href={fileUrl} target="_blank" rel="noopener noreferrer">open it in a new tab</a> or download it.</>
        ) : (
          <>Use the controls below to flip through every page. If the embed doesn&apos;t load on your device, you can <a href={fileUrl} target="_blank" rel="noopener noreferrer">open the comic in a new tab</a> or download it.</>
        )}</p>
        <div className="reader-frame-wrap">
          {pages ? (
            pages.map((src, i) => (
              <a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${comic.title} page ${i + 1} full size`}>
                <img
                  className="reader-image"
                  src={src}
                  alt={`${comic.title} ${comic.issue} page ${i + 1}`}
                  loading="lazy"
                />
              </a>
            ))
          ) : isImage ? (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${comic.title} full size`}>
              <img
                className="reader-image"
                src={fileUrl}
                alt={`${comic.title} ${comic.issue}`}
                loading="lazy"
              />
            </a>
          ) : (
            <iframe
              className="reader-frame"
              src={`${fileUrl}#view=FitH`}
              title={`${comic.title} reader`}
              loading="lazy"
            />
          )}
        </div>
        <div className="comic-page-actions" style={{ marginTop: '1rem' }}>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="btn-main">↗ Open Full Screen</a>
          <a href={fileUrl} download className="download-btn">{downloadLabel}</a>
        </div>
      </section>

      <section className="comic-section">
        <h3 className="comic-section-title">More Comics to Read</h3>
        {hasSeriesNav && (
          <div className="series-nav series-nav-bottom" aria-label={`${comic.title} series navigation`}>
            {prev ? (
              <a href={`#/comic/${prev.id}`} className="series-nav-link series-nav-prev">
                <span className="series-nav-direction">← Previous in series</span>
                <span className="series-nav-issue">{prev.issue}</span>
                <span className="series-nav-title">{prev.title}</span>
              </a>
            ) : (
              <span className="series-nav-link series-nav-empty" aria-hidden="true" />
            )}
            {next ? (
              <a href={`#/comic/${next.id}`} className="series-nav-link series-nav-next">
                <span className="series-nav-direction">Next in series →</span>
                <span className="series-nav-issue">{next.issue}</span>
                <span className="series-nav-title">{next.title}</span>
              </a>
            ) : (
              <span className="series-nav-link series-nav-empty" aria-hidden="true" />
            )}
          </div>
        )}
        <div className="comics-grid">
          {related.map((c) => (
            <ComicCard key={c.id} comic={c} />
          ))}
        </div>
        <p style={{ marginTop: '1rem' }}>
          <a href="#/" className="btn-main">📚 Browse All Comics</a>
        </p>
      </section>
    </article>
  );
}
