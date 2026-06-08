import { createContext, useContext } from 'react';

export const RouteContext = createContext({ name: 'home' });

export function useRoute() {
  return useContext(RouteContext);
}
