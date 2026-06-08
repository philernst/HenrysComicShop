import Header from './components/Header';
import Nav from './components/Nav';
import ComicPage from './components/ComicPage';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import NotFound from './pages/NotFound';
import AboutPage from './pages/About';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useRoute } from './RouteContext';
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
    case 'not-found':
      return <NotFound />;
    default:
      return <Home />;
  }
}

export default function App() {
  const route = useRoute();
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
