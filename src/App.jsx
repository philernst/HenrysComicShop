import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ComicsGallery from './components/ComicsGallery';
import ComicPage from './components/ComicPage';
import About from './components/About';
import Footer from './components/Footer';
import useHashRoute from './hooks/useHashRoute';

export default function App() {
  const route = useHashRoute();

  return (
    <>
      <Header />
      <Nav />
      <main>
        {route.name === 'comic' ? (
          <ComicPage id={route.id} />
        ) : (
          <>
            <Hero />
            <ComicsGallery />
            <About />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
