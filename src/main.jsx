import ReactDOM from 'react-dom'; // Importa ReactDOM de 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import App from './App.jsx';
import './index.css';
import { UserProvider } from '../backend/config/UserContext.jsx'; // Importa el proveedor de contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);
