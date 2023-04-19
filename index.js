import React from 'react';
import ReactDOM from 'react-dom/client';

import { Calculator } from './src/Calculator';
function App() {
    return (
      <>
        <Calculator/>
      </>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );