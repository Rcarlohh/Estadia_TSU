import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts/LayoutComponent.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ServiceScreen from './screens/ServiceScreen.jsx';
import ForumScreen from './screens/ForumScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import LoginModalComponent from './components/ForumComponents/LoginModalComponent/LoginModalComponent.jsx'; 
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.jsx'
import { UserContext } from '../backend/config/UserContext.jsx'; // Importa el contexto de usuario
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { user } = useContext(UserContext); // Utiliza el contexto de usuario

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />
          <Route path="/Service" element={<ServiceScreen />} />
          <Route path="/Forum" element={<ForumScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path='/Profile' element={<ProfileScreen/>}/>
        </Routes>
      </Layout>
      {!user && <LoginModalComponent />}
    </Router>
  );
}

export default App;
