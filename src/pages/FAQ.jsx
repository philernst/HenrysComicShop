import { faqs } from '../data/faqs';

export default function FAQ() {
  return (
    <article className="legal-page">
      <header className="legal-page-header">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="legal-meta">
          Quick answers from Henry (and his grown-ups) about the comics, the shop, and how to read.
        </p>
      </header>

      <section className="legal-section">
        <dl className="faq-list">
          {faqs.map((entry) => (
            <div key={entry.q} className="faq-item">
              <dt>{entry.q}</dt>
              <dd>{entry.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="legal-section">
        <h3>Still curious?</h3>
        <p>
          If your question isn&apos;t here, send it through the{' '}
          <a href="#/contact">Contact</a> page or email{' '}
          <strong>henryscomicshop@gmail.com</strong>. Real humans read every message.
        </p>
      </section>
    </article>
  );
}
