import useHead from '../hooks/useHead';
import { SITE_NAME, SITE_URL } from '../site-config';

export default function NotFound() {
  useHead({
    title: `Page not found \u2014 ${SITE_NAME}`,
    description: 'That page doesn\u2019t seem to exist on Henry\u2019s Comic Shop.',
    canonical: SITE_URL + '/404',
  });

  return (
    <article className="legal-page">
      <header className="legal-page-header">
        <h2 className="section-title">Hmm, nothing here</h2>
        <p className="legal-meta">That page seems to have wandered off.</p>
      </header>
      <section className="legal-section">
        <h3>Try one of these</h3>
        <ul>
          <li><a href="/">The full comic vault</a></li>
          <li><a href="/about">About Henry</a></li>
          <li><a href="/faq">Frequently Asked Questions</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </section>
    </article>
  );
}
