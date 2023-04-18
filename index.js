import React from 'react';
import ReactDOM from 'react-dom/client';

import { Child } from './src/firstComp';
function App() {
    return (
      <div>
        <Child/>
      </div>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );