export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div>
          <h2>A Whole Vault of Comics — Free to Read!</h2>
          <p>
            Hi! I&apos;m Henry and I make awesome comic books. Pick any cover
            below to crack open the story — superheroes, space pirates, talking
            sharks, the works. New ones drop all the time, so come back often!
          </p>
          <a href="#comics" className="btn-main">📚 Browse the Comics</a>
        </div>
        <div className="price-badge">
          <span className="price-amount">FREE</span>
          <span className="price-label">all comics</span>
          <div style={{ marginTop: '6px', fontSize: '0.78rem', fontWeight: 900, color: 'var(--dark)', background: 'rgba(0,0,0,0.1)', borderRadius: '6px', padding: '3px 6px' }}>
            no sign-up
          </div>
        </div>
      </div>
    </section>
  );
}
