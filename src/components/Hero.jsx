export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div>
          <h2>1 New Comic Every Week — Sent to Your Email!</h2>
          <p>
            Hi! I&apos;m Henry and I make awesome comic books. Subscribe and get a
            brand-new comic emailed to you every single week — 4 comics a month
            for just $20!
          </p>
          <a href="#subscribe" className="btn-main">🚀 Subscribe Now!</a>
        </div>
        <div className="price-badge">
          <span className="price-amount">$20</span>
          <span className="price-label">per month</span>
          <div style={{ marginTop: '6px', fontSize: '0.78rem', fontWeight: 900, color: 'var(--dark)', background: 'rgba(0,0,0,0.1)', borderRadius: '6px', padding: '3px 6px' }}>
            4 comics / month
          </div>
        </div>
      </div>
    </section>
  );
}
