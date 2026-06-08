export default function Footer() {
  return (
    <footer>
      <p>Made with ❤️ by <strong>Henry</strong> · Henry&apos;s Comic Shop · Est. 2024</p>
      <p style={{ marginTop: '0.4rem' }}>
        Questions or fan mail? <a href="#/contact">Send a message</a> or email{' '}
        <strong>henryscomicshop@gmail.com</strong>
      </p>
      <nav className="footer-nav" aria-label="Site footer">
        <a href="#/about">About</a>
        <span aria-hidden="true">·</span>
        <a href="#/faq">FAQ</a>
        <span aria-hidden="true">·</span>
        <a href="#/contact">Contact</a>
        <span aria-hidden="true">·</span>
        <a href="#/privacy">Privacy</a>
        <span aria-hidden="true">·</span>
        <a href="#/terms">Terms</a>
      </nav>
    </footer>
  );
}
