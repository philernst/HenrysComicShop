import { hydrateRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App.jsx';
import RouteProvider from './RouteProvider.jsx';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </StrictMode>,
);
