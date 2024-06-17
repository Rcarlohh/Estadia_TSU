import ReactDOM from 'react-dom'; // Importa ReactDOM de 'react-dom'

import React from 'react';
import App from './App.jsx';
import './index.css';
import { UserProvider } from '../backend/config/UserContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);
