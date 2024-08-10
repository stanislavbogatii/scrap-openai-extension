import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

const root: any = ReactDOM.createRoot(window.document.getElementById('app-container') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
