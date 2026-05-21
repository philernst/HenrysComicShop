import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ComicsGallery from './components/ComicsGallery';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <ComicsGallery />
        <About />
      </main>
      <Footer />
    </>
  );
}
