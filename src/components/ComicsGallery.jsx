import { useMemo, useState } from 'react';
import { getSortedComics, getSeriesList } from '../data/comics';
import ComicCard from './ComicCard';

const ALL = 'All';

export default function ComicsGallery() {
  const sorted = useMemo(() => getSortedComics(), []);
  const series = useMemo(() => getSeriesList(), []);
  const [active, setActive] = useState(ALL);

  const visible = active === ALL ? sorted : sorted.filter((c) => c.title === active);

  return (
    <section id="comics">
      <h2 className="section-title">The Comic Vault</h2>
      <p className="gallery-intro">
        {sorted.length} hand-drawn adventures by Henry — all free, all yours. Pick one and dive in!
      </p>

      <div className="series-filter" role="tablist" aria-label="Filter comics by series">
        <button
          type="button"
          role="tab"
          aria-selected={active === ALL}
          className={`series-chip${active === ALL ? ' active' : ''}`}
          onClick={() => setActive(ALL)}
        >
          All
        </button>
        {series.map((title) => (
          <button
            key={title}
            type="button"
            role="tab"
            aria-selected={active === title}
            className={`series-chip${active === title ? ' active' : ''}`}
            onClick={() => setActive(title)}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="comics-grid">
        {visible.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </section>
  );
}
