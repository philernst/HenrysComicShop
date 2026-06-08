export default function Privacy() {
  return (
    <article className="legal-page">
      <header className="legal-page-header">
        <h2 className="section-title">Privacy Policy</h2>
        <p className="legal-meta">Last updated: June 7, 2026</p>
      </header>

      <section className="legal-section">
        <h3>The short version</h3>
        <p>
          Henry&apos;s Comic Shop is a small site that exists so kids and grown-ups can
          read Henry&apos;s comics for free. We collect as little information as we can,
          and we never ask kids for personal details. The site does use a few standard
          tools (analytics, ads, a contact form) that drop cookies in your browser. You
          can decline those at any time with the banner at the bottom of the page.
        </p>
      </section>

      <section className="legal-section">
        <h3>What we collect</h3>
        <p>
          <strong>Site analytics (Google Analytics).</strong> When you visit, we use
          Google Analytics to count visits and see which comics people read. Google
          may set cookies and collect things like the page you&apos;re on, the kind of
          device you&apos;re using, and a rough estimate of your country. We don&apos;t use
          this to identify you.
        </p>
        <p>
          <strong>Advertising (Google AdSense).</strong> Some pages show ads served
          by Google AdSense. Google and its partners may use cookies and similar
          technologies to serve ads. Because this is a site for kids, we tell Google
          to treat every ad request as <em>child-directed</em> and to serve
          non-personalized ads only.
        </p>
        <p>
          <strong>Contact form.</strong> If you use the Contact page, your name,
          email, and message are sent to Henry&apos;s parents through{' '}
          <a href="https://www.emailjs.com/" rel="noopener noreferrer" target="_blank">EmailJS</a>{' '}
          so we can email you back. We don&apos;t store these messages anywhere else.
        </p>
        <p>
          <strong>Fonts and assets.</strong> We load fonts from Google Fonts. Google
          may log the request, including your IP address, to serve the font file.
        </p>
        <p>
          <strong>Consent choice.</strong> Your accept/decline choice from the cookie
          banner is stored in your browser&apos;s <code>localStorage</code> so we don&apos;t
          have to ask again on every visit.
        </p>
      </section>

      <section className="legal-section">
        <h3>A note for kids and parents</h3>
        <p>
          Henry is 8. The site exists for kids his age. We do <strong>not</strong> ask
          for personal information like your age, school, address, phone number, or
          photo. If you&apos;re a kid and you want to send us a message, please ask a
          parent or guardian first.
        </p>
        <p>
          We don&apos;t knowingly collect personal information from children under 13. If
          you&apos;re a parent and you&apos;d like a message you sent us deleted, email{' '}
          <strong>henryscomicshop@gmail.com</strong> and we&apos;ll take care of it.
        </p>
      </section>

      <section className="legal-section">
        <h3>Your choices</h3>
        <ul>
          <li>
            Use the cookie banner at the bottom of the page to accept or decline
            analytics and ads. If you decline, we will not load Google Analytics or
            AdSense on your visit.
          </li>
          <li>
            You can clear your browser&apos;s cookies and <code>localStorage</code> at any
            time to reset everything.
          </li>
          <li>
            You can read{' '}
            <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
              how Google uses information from sites that use their services
            </a>
            {' '}for more on what Google does with the data it collects.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>Questions?</h3>
        <p>
          Email <strong>henryscomicshop@gmail.com</strong> or use the{' '}
          <a href="#/contact">Contact</a> page. A grown-up reads every message.
        </p>
      </section>
    </article>
  );
}
