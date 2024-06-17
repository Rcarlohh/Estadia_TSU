// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts/LayoutComponent.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ServiceScreen from './screens/ServiceScreen.jsx';
import ForumScreen from './screens/ForumScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import LoginModalComponent from './components/ForumComponents/LoginModalComponent/LoginModalComponent.jsx'; 
import { UserContext } from '../backend/config/UserContext.jsx'; // Importa el contexto de usuario
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null); // Estado de sesión de usuario

  useEffect(() => {
    // Verificar la sesión al cargar la aplicación
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/About" element={<AboutScreen />} />
            <Route path="/Service" element={<ServiceScreen />} />
            <Route path="/Forum" element={<ForumScreen />} />
            <Route path="/Contact" element={<ContactScreen />} />
          </Routes>
        </Layout>
        {/* Mostrar el modal de inicio de sesión solo cuando no hay sesión activa */}
        {!user && <LoginModalComponent />}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
