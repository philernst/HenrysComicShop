import { faqs } from '../data/faqs';
import AdSlot from '../components/AdSlot';
import useHead from '../hooks/useHead';
import { SITE_NAME, SITE_URL } from '../site-config';

const FAQ_AD_SLOT = import.meta.env.VITE_ADSENSE_SLOT_FAQ;

export default function FAQ() {
  useHead({
    title: `FAQ \u2014 ${SITE_NAME}`,
    description: 'Quick answers about Henry\u2019s Comic Shop: how to read on tablets, printing comics, sending fan mail, and info for parents.',
    canonical: SITE_URL + '/faq',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  });

  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half);

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
          {firstHalf.map((entry) => (
            <div key={entry.q} className="faq-item">
              <dt>{entry.q}</dt>
              <dd>{entry.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <AdSlot slot={FAQ_AD_SLOT} className="ad-slot-inline" />

      <section className="legal-section">
        <dl className="faq-list">
          {secondHalf.map((entry) => (
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
          <a href="/contact">Contact</a> page or email{' '}
          <strong>henryscomicshop@gmail.com</strong>. Real humans read every message.
        </p>
      </section>
    </article>
  );
}
