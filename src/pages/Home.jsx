import Hero from '../components/Hero';
import Latest from '../components/Latest';
import ComicsGallery from '../components/ComicsGallery';
import About from '../components/About';
import useHead from '../hooks/useHead';
import { SITE_URL, SITE_NAME, SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_IMAGE, absoluteUrl } from '../site-config';

export default function Home() {
  useHead({
    title: `${SITE_NAME} \u2014 free comics by Henry, age 8`,
    description: SITE_DEFAULT_DESCRIPTION,
    canonical: SITE_URL + '/',
    ogImage: absoluteUrl(SITE_DEFAULT_IMAGE),
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL + '/',
      description: SITE_DEFAULT_DESCRIPTION,
    },
  });

  return (
    <>
      <Hero />
      <Latest />
      <ComicsGallery />
      <About />
    </>
  );
}
