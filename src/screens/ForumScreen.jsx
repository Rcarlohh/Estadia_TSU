import React, { useContext, useState } from 'react';
import HeaderComponent from '../components/Layouts/HeaderComponent';
import LoginModalComponent from '../components/ForumComponents/LoginModalComponent/LoginModalComponent.jsx';
import AllPostComponent from '../components/ForumComponents/PostComponents/AllPostComponents.jsx';
import { signOutUser } from '../../backend/firebaseconfig.js'; 
import CreatePostModal from '../components/ForumComponents/PostComponents/CreatePost/CreatePostModal.jsx';
import { UserContext } from '../../backend/config/UserContext';

const ForumScreen = () => {
  const { user } = useContext(UserContext);
  const [isLoginModalOpen, setLoginModalOpen] = useState(!user);
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleOpenCreatePostModal = () => {
    setCreatePostModalOpen(true);
  };

  const handleCloseCreatePostModal = () => {
    setCreatePostModalOpen(false);
  };

  const handlePostPublish = (success, message) => {
    setAlertMessage(message);
    if (success) {
      handleCloseCreatePostModal();
    }
    setTimeout(() => setAlertMessage(''), 3000); // Clear the message after 3 seconds
  };

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        setLoginModalOpen(true);
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    <div className="forum-container">
      <HeaderComponent
        title="Buro de clientes"
        subtitle1="Pasión por el transporte"
        subtitle2="Excelencia en el servicio"
      />
      
      <div className={`content ${isLoginModalOpen ? 'blur-background' : ''}`}>
        <AllPostComponent/>
      </div>

      {isLoginModalOpen && (
        <LoginModalComponent isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
      )}

      {isCreatePostModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseCreatePostModal}>X</button>
            <CreatePostModal onClose={handlePostPublish} />
          </div>
        </div>
      )}

      {alertMessage && (
        <div className="alert">
          {alertMessage}
        </div>
      )}

      <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
        <button
          className="btn btn-primary btn-lg rounded-circle"
          type="button"
          style={{ width: '60px', height: '60px', marginRight: '10px' }}
          onClick={handleOpenCreatePostModal}
        >
          <span aria-hidden="true">+</span>
        </button>

      </div>
    </div>
  );
};

export default ForumScreen;
