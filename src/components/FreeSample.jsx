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
          href="sample-comic.pdf"
          download
          style={{ display: 'inline-block', background: 'var(--dark)', color: 'var(--yellow)', border: '4px solid var(--dark)', borderRadius: '10px', padding: '0.9rem 2.2rem', fontFamily: "'Bangers', cursive", fontSize: '1.6rem', letterSpacing: '2px', textDecoration: 'none', boxShadow: '6px 6px 0 rgba(0,0,0,0.3)', transition: 'transform 0.1s, box-shadow 0.1s' }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 rgba(0,0,0,0.3)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.3)'; }}
        >
          ⬇️ Download Free Sample Comic
        </a>
      </div>
    </section>
  );
}
