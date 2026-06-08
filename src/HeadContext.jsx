import { createContext } from 'react';

// HeadContext lets each page write its head metadata into a shared
// collector. The context value is `null` on the client (so useHead skips
// the SSR capture branch) or a collector object whose `set()` method
// records the latest values during render. The prerender script reads the
// collector's `.data` after renderToString() to build the head HTML.
export const HeadContext = createContext(null);

export function createHeadCollector() {
  const data = {};
  return {
    data,
    set(payload) {
      Object.assign(data, payload);
    },
  };
}
