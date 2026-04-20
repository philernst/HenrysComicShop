import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const VENMO_QR = '/venmo-qr.png';

export default function SubscribeForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [submitted]);

  function handleSubmit() {
    if (!fname.trim() || !email.trim()) {
      alert('Please fill in your name and email address to subscribe!');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not configured. Please contact henryscomicshop@gmail.com directly.');
      return;
    }

    setSending(true);

    const templateParams = {
      from_name: `${fname.trim()} ${lname.trim()}`.trim(),
      from_email: email.trim(),
      to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'henryscomicshop@gmail.com',
    };

    emailjs
      .send(serviceId, templateId, templateParams, { publicKey })
      .then(() => {
        setSubmitted(true);
        setSending(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSending(false);
        alert('Oops! Something went wrong sending your info. Please try again or email henryscomicshop@gmail.com directly.');
      });
  }

  return (
    <section className="subscribe-section" id="subscribe">
      <h2 className="section-title">Sign Up!</h2>

      {/* HOW IT WORKS STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { num: '1️⃣', label: 'Fill out the form', sub: 'Tell Henry your email' },
          { num: '2️⃣', label: 'Venmo $20/month', sub: '@Phil-Ernst-3' },
          { num: '3️⃣', label: 'Get your comics!', sub: '1 comic emailed every week' },
        ].map((step) => (
          <div key={step.num} style={{ background: 'rgba(255,225,53,0.1)', border: '2px solid rgba(255,225,53,0.3)', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{step.num}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--yellow)', textTransform: 'uppercase', letterSpacing: '1px' }}>{step.label}</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px', fontWeight: 700 }}>{step.sub}</div>
          </div>
        ))}
      </div>

      {/* VENMO QR CODE */}
      <div style={{ background: 'rgba(255,225,53,0.1)', border: '2px solid rgba(255,225,53,0.3)', borderRadius: '12px', padding: '1.2rem 1.5rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img src={VENMO_QR} alt="Venmo QR Code for @Phil-Ernst-3" width="160" height="160" style={{ border: '4px solid var(--dark)', borderRadius: '10px', boxShadow: '4px 4px 0 var(--dark)', imageRendering: 'pixelated', background: '#fff' }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bangers', cursive", fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--yellow)', marginBottom: '4px' }}>📱 Scan to Pay on Venmo!</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.8)' }}>Point your phone camera at this QR code</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.8)' }}>to open Venmo and pay <strong style={{ color: 'var(--yellow)' }}>@Phil-Ernst-3</strong></div>
        </div>
      </div>

      {/* WHAT'S INCLUDED CALLOUT */}
      <div style={{ background: 'rgba(255,107,53,0.15)', border: '2px solid var(--orange)', borderRadius: '10px', padding: '1rem 1.3rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>📋</span>
        <div>
          <div style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Here&apos;s exactly what you get:</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[
              '✅ 1 brand-new comic emailed to you every week',
              '✅ 4 comics per month total',
              '✅ $20/month — paid by Venmo',
              '✅ Cancel anytime by emailing Henry',
            ].map((item) => (
              <li key={item} style={{ fontSize: '0.92rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">Your First Name</label>
          <input type="text" id="fname" placeholder="e.g. Alex" autoComplete="given-name" value={fname} onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" placeholder="e.g. Johnson" autoComplete="family-name" value={lname} onChange={(e) => setLname(e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group full-width">
          <label htmlFor="email">Your Email Address <span style={{ color: 'var(--orange)' }}>(comics will be sent here!)</span></label>
          <input type="email" id="email" placeholder="you@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="submit-row">
        <button className="btn-submit" onClick={handleSubmit} disabled={submitted || sending}>
          {submitted ? '✓ Subscribed!' : sending ? 'Sending…' : 'BAM! Subscribe →'}
        </button>
        <span className="secure-note">
          After signing up, Venmo <strong style={{ color: 'var(--yellow)' }}>$20</strong> to <strong style={{ color: 'var(--yellow)' }}>@Phil-Ernst-3</strong><br />
          to activate your subscription!
        </span>
      </div>

      {submitted && (
        <div className="success-msg" ref={successRef}>
          <h3>🎉 KAPOW! You&apos;re In!</h3>
          <p>Thanks for signing up! Now Venmo <strong>$20 to @Phil-Ernst-3</strong> and your first comic will land in your inbox this week. Watch your email!</p>
        </div>
      )}
    </section>
  );
}
