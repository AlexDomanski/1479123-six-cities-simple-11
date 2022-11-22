import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const OFFERS_AMOUNT = 53;

root.render(
  <React.StrictMode>
    <App offersAmount={OFFERS_AMOUNT} />
  </React.StrictMode>,
);
