import { useEffect } from 'react';
import { getComicById, getRelatedComics } from '../data/comics';
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
  const fileUrl = comic.image || comic.pdf;
  const isImage = Boolean(comic.image);
  const downloadLabel = isImage ? '⬇️ Download Image' : '⬇️ Download PDF';

  return (
    <article className="comic-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="#/">← The Comic Vault</a>
      </nav>

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
        <p className="comic-paragraph">{isImage ? (
          <>Tap or click the comic to see it full-size. You can also <a href={fileUrl} target="_blank" rel="noopener noreferrer">open it in a new tab</a> or download it.</>
        ) : (
          <>Use the controls below to flip through every page. If the embed doesn&apos;t load on your device, you can <a href={fileUrl} target="_blank" rel="noopener noreferrer">open the comic in a new tab</a> or download it.</>
        )}</p>
        <div className="reader-frame-wrap">
          {isImage ? (
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
