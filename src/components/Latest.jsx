import comics from '../data/comics';
import ComicCard from './ComicCard';

// "Latest" surfaces the most recently added comics (authoring order: last
// entries in comics.js are newest).
export default function Latest() {
  const recent = comics.slice(-3).reverse();
  if (recent.length === 0) return null;

  return (
    <section className="latest-section" id="latest" aria-labelledby="latest-heading">
      <h2 id="latest-heading" className="section-title">Fresh from the Drawing Board</h2>
      <p className="latest-intro">
        These are the newest comics Henry has finished and scanned in. Some are
        one-shots, others are pieces of a bigger series &mdash; tap any cover to
        read the issue, meet the cast, and find out where it fits in.
      </p>
      <ul className="latest-list">
        {recent.map((comic) => (
          <li key={comic.id} className="latest-item">
            <ComicCard comic={comic} />
            <div className="latest-meta">
              <h3>{comic.title} {comic.issue}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
