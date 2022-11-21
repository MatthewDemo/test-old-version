import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CellContextProvider } from './context/CellContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CellContextProvider>
      <App />
    </CellContextProvider>
  </React.StrictMode>
);

