import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Modal from 'react-modal';


// Définir l'élément racine de l'application
Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);