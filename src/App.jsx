import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Latest from './components/Latest';
import ComicsGallery from './components/ComicsGallery';
import ComicPage from './components/ComicPage';
import About from './components/About';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import AboutPage from './pages/About';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import useHashRoute from './hooks/useHashRoute';
import useAnalytics from './hooks/useAnalytics';

function renderRoute(route) {
  switch (route.name) {
    case 'comic':
      return <ComicPage id={route.id} />;
    case 'about':
      return <AboutPage />;
    case 'faq':
      return <FAQ />;
    case 'privacy':
      return <Privacy />;
    case 'terms':
      return <Terms />;
    case 'contact':
      return <Contact />;
    default:
      return (
        <>
          <Hero />
          <Latest />
          <ComicsGallery />
          <About />
        </>
      );
  }
}

export default function App() {
  const route = useHashRoute();
  useAnalytics();

  return (
    <>
      <Header />
      <Nav />
      <main>{renderRoute(route)}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
