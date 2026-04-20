export default function FreeSample() {
  return (
    <section id="sample" style={{ marginBottom: '3rem' }}>
      <h2 className="section-title">Free Sample Comic</h2>
      <div style={{ background: 'var(--yellow)', border: '5px solid var(--dark)', borderRadius: '16px', padding: '2.5rem', boxShadow: '8px 8px 0 var(--dark)', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>📖</div>
        <h3 style={{ fontFamily: "'Bangers', cursive", fontSize: '2rem', letterSpacing: '2px', color: 'var(--dark)', marginBottom: '0.6rem' }}>
          Read One Before You Subscribe!
        </h3>
        <p style={{ fontWeight: 800, color: '#333', fontSize: '1rem', marginBottom: '1.5rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
          Not sure yet? Check out a real comic from Henry — totally free, no sign-up needed!
        </p>
        <a
          href="/sample-comic.pdf"
          download
          className="download-btn"
        >
          ⬇️ Download Free Sample Comic
        </a>
      </div>
    </section>
  );
}
