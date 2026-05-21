import { useState } from 'react';
import comics from '../data/comics';
import ComicCard from './ComicCard';
import ComicReader from './ComicReader';

export default function ComicsGallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="comics">
      <h2 className="section-title">The Comic Vault</h2>
      <p className="gallery-intro">
        {comics.length} hand-drawn adventures by Henry — all free, all yours. Pick one and dive in!
      </p>
      <div className="comics-grid">
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} onOpen={setActive} />
        ))}
      </div>
      {active && <ComicReader comic={active} onClose={() => setActive(null)} />}
    </section>
  );
}
