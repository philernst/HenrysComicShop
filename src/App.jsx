import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Perks from './components/Perks';
import FreeSample from './components/FreeSample';
import SubscribeForm from './components/SubscribeForm';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AdScriptLoader from './components/AdScriptLoader';
import AdSlot from './components/AdSlot';

const SLOTS = {
  top: import.meta.env.VITE_ADSENSE_SLOT_TOP,
  postHero: import.meta.env.VITE_ADSENSE_SLOT_POST_HERO,
  mid1: import.meta.env.VITE_ADSENSE_SLOT_MID1,
  mid2: import.meta.env.VITE_ADSENSE_SLOT_MID2,
  mid3: import.meta.env.VITE_ADSENSE_SLOT_MID3,
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER,
};

export default function App() {
  return (
    <>
      <AdScriptLoader />
      <Header />
      <Nav />
      <AdSlot slot={SLOTS.top} />
      <main>
        <Hero />
        <AdSlot slot={SLOTS.postHero} />
        <Perks />
        <AdSlot slot={SLOTS.mid1} />
        <FreeSample />
        <SubscribeForm />
        <AdSlot slot={SLOTS.mid2} />
        <About />
        <AdSlot slot={SLOTS.mid3} />
        <FAQ />
      </main>
      <AdSlot slot={SLOTS.footer} />
      <Footer />
    </>
  );
}
