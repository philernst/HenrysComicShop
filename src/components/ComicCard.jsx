export default function ComicCard({ comic }) {
  const { id, title, issue, blurb, icon, palette } = comic;

  return (
    <a
      href={`#/comic/${id}`}
      className="comic-card"
      style={{ '--card-bg': palette.bg, '--card-accent': palette.accent }}
    >
      <div className="comic-cover">
        <span className="comic-issue">{issue}</span>
        <span className="comic-icon" aria-hidden="true">{icon}</span>
      </div>
      <div className="comic-meta">
        <h3>{title}</h3>
        <p>{blurb}</p>
        <span className="comic-read">Read &rarr;</span>
      </div>
    </a>
  );
}
