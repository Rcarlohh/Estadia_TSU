import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts/LayoutComponent.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ServiceScreen from './screens/ServiceScreen.jsx';
import ForumScreen from './screens/ForumScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import LoginModalComponent from './components/ForumComponents/LoginModalComponent/LoginModalComponent.jsx'; 
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.jsx';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen.jsx';
import BlogScrenn from './screens/BlogScreen/BlogScreen.jsx';
import { UserContext } from '../backend/config/UserContext.jsx'; 


function App() {
  const { user } = useContext(UserContext); // Utiliza el contexto de usuario

  return (
    <Router>
      <Routes>
        {/* Rutas que usan el layout */}
        <Route path="/" element={<Layout><HomeScreen /></Layout>} />
        <Route path="/About" element={<Layout><AboutScreen /></Layout>} />
        <Route path="/Service" element={<Layout><ServiceScreen /></Layout>} />
        <Route path="/Forum" element={<Layout><ForumScreen /></Layout>} />
        <Route path="/Contact" element={<Layout><ContactScreen /></Layout>} />

        {/* Rutas que no usan el layout */}
        <Route path="/Profile" element={<ProfileScreen />} />
        <Route path="/Settings" element={<SettingsScreen />} />
        <Route path="/Blog" element={<BlogScrenn />} />
        <Route path="/Blog/:eventId" element={<BlogScrenn />} />
      </Routes>
      {!user && <LoginModalComponent />}
    </Router>
  );
}

export default App;
