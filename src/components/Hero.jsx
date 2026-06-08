export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div>
          <h2>A Whole Vault of Comics &mdash; Free to Read!</h2>
          <p>
            Hi! I&apos;m Henry. I&apos;m 8 years old and I&apos;ve been making my own
            comic books since I was 5. This site is where I put them so other kids
            can read them, too.
          </p>
          <p>
            Inside, you&apos;ll find dragons, space pirates, lightsaber duels, a
            lava monster, a talking shark or two, a few skeleton kings, and at
            least one comic with a back side. Some of them are one-shots and some
            are part of a series &mdash; the cover tiles below are grouped by
            series so you can read them in order.
          </p>
          <p>
            Every comic is free and there&apos;s no sign-up. Pick a cover and
            crack it open.
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
