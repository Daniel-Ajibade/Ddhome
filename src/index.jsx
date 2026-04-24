/**
 * index.js
 * React entry point — mounts the App component into the HTML root div.
 */

import React    from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // Global styles, CSS variables, resets
import App      from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);