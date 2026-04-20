import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Perks from './components/Perks';
import FreeSample from './components/FreeSample';
import SubscribeForm from './components/SubscribeForm';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <Perks />
        <FreeSample />
        <SubscribeForm />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
