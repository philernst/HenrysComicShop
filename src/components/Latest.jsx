import comics from '../data/comics';
import { getSeriesInfo } from '../data/series';
import ComicCard from './ComicCard';

// "Latest" surfaces the most recently added comics (authoring order: last
// entries in comics.js are newest). It adds real, varied paragraph text to
// the home page so the home isn't just a grid of cover tiles.
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
        {recent.map((comic) => {
          const info = getSeriesInfo(comic.title);
          return (
            <li key={comic.id} className="latest-item">
              <ComicCard comic={comic} />
              <div className="latest-meta">
                <h3>{comic.title} {comic.issue}</h3>
                <p>{comic.blurb}</p>
                {info && (
                  <p className="latest-series-note">
                    <strong>About the series:</strong> {info.blurb}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
