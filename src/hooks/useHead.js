import { useContext, useEffect } from 'react';
import { HeadContext } from '../HeadContext';

function setMetaName(name, content) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property, content) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`link[rel="${rel}"][data-managed="head"]`);
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    el.setAttribute('data-managed', 'head');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(jsonLd) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector('script[type="application/ld+json"][data-managed="head"]');
  if (!jsonLd) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-managed', 'head');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(jsonLd);
}

// useHead sets per-page head metadata. During SSR it writes into the
// HeadContext collector (read after render to build the HTML template).
// On the client it mutates document.head whenever the values change.
export default function useHead({ title, description, canonical, ogImage, jsonLd } = {}) {
  const collector = useContext(HeadContext);
  // During render: capture into collector for SSR.
  if (collector) {
    const payload = {};
    if (title !== undefined) payload.title = title;
    if (description !== undefined) payload.description = description;
    if (canonical !== undefined) payload.canonical = canonical;
    if (ogImage !== undefined) payload.ogImage = ogImage;
    if (jsonLd !== undefined) payload.jsonLd = jsonLd;
    collector.set(payload);
  }

  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : '';
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (title) document.title = title;
    setMetaName('description', description);
    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:url', canonical);
    setMetaProperty('og:image', ogImage);
    setMetaProperty('twitter:card', ogImage ? 'summary_large_image' : 'summary');
    setLink('canonical', canonical);
    setJsonLd(jsonLd);
  }, [title, description, canonical, ogImage, jsonLdKey, jsonLd]);
}
