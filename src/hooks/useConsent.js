import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'hcs.consent.v1';
const EVENT_NAME = 'hcs:consent-change';

export function readConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === 'granted' || raw === 'declined') return raw;
  } catch {
    // localStorage may be unavailable (private mode, server). Treat as undecided.
  }
  return null;
}

export function setConsent(value) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
}

function subscribe(callback) {
  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener('storage', callback);
  };
}

// Hide the banner during SSR/prerender to avoid a flash of "decline/accept"
// for returning visitors who already chose. The client snapshot reads the
// real value once hydrated.
function getServerSnapshot() {
  return 'declined';
}

export default function useConsent() {
  return useSyncExternalStore(subscribe, readConsent, getServerSnapshot);
}
