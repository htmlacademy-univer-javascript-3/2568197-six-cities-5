import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerCount = 5;

root.render(
  <React.StrictMode>
    <App offerCount={offerCount} />
  </React.StrictMode>
);
