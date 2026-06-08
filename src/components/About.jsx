export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Henry</h2>
      <div className="about-section">
        <div className="henry-avatar">
          <img src="/henry-avatar.png" alt="Henry" />
        </div>
        <div>
          <h2>Hi, I&apos;m Henry!</h2>
          <p>
            I&apos;m 8 years old and I LOVE making comics. I&apos;ve been drawing
            my own superheroes, dragons, robots, and funny characters since I was
            5. I plan each comic with a pencil sketch, ink it with markers, and a
            grown-up helps me scan the pages so they can go up here.
          </p>
          <p>
            Every comic on this site is free &mdash; I just want as many people as
            possible to read them. If you like them, you can{' '}
            <a href="#/contact">send me a message</a> or check out the{' '}
            <a href="#/about">longer About page</a> to read about how a comic gets
            made.
          </p>
          <div className="speech-bubble">
            &ldquo;Every comic I make is packed with action, jokes, and characters I invented myself. I hope they make you smile!&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
