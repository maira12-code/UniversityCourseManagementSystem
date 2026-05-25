import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

import { UniversityProvider } from './context/UniversityContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UniversityProvider>
      <App />
    </UniversityProvider>
  </React.StrictMode>
);