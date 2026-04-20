import { useState } from 'react';

const faqs = [
  {
    q: 'How does the subscription work?',
    a: "It's simple! Fill out the sign-up form with your email address, then Venmo $20 to @Phil-Ernst-3. Once Henry sees your payment, he'll start sending you 1 new comic every week — straight to your inbox!",
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes! Just email Henry at henryscomicshop@gmail.com and he\'ll stop your subscription. Easy as that — no questions asked!',
  },
  {
    q: 'What kind of comics does Henry make?',
    a: 'Henry draws all kinds of comics — superhero adventures, funny animal stories, space explorations, and mystery adventures. Each week is a brand-new surprise!',
  },
  {
    q: 'How exactly does payment work?',
    a: 'After signing up, Venmo $20 to @Phil-Ernst-3. That covers 4 comics for the month. At the start of each new month, Henry will send you a Venmo request for $20 — just approve it to keep your comics coming! No need to remember to send payment yourself.',
  },
  {
    q: 'How will I receive my comic each week?',
    a: "Henry will email your comic directly to the email address you signed up with. Make sure to check your inbox (and spam folder, just in case!) every week for a new delivery.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${q.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        type="button"
      >
        {q}
        <span className="faq-arrow">▼</span>
      </button>
      <div className="faq-answer" id={answerId} role="region">{a}</div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq">
      <h2 className="section-title">Questions?</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </section>
  );
}
