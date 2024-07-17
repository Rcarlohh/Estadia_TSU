import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail, deleteUser } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './SettingsScreen.css';

const SettingsScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Correo de restablecimiento de contraseña enviado.');
      })
      .catch((error) => {
        alert('Error al enviar el correo de restablecimiento: ' + error.message);
      });
  };

  const handleDeleteAccount = () => {
    const user = auth.currentUser;

    if (user) {
      deleteUser(user)
        .then(() => {
          alert('Cuenta eliminada exitosamente.');
        })
        .catch((error) => {
          alert('Error al eliminar la cuenta: ' + error.message);
        });
    }
  };

  const handleBack = () => {
    navigate('/Forum'); // Navega a la ruta especificada
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="back-button" onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Regresar
        </button>
        <h2>Configuración</h2>
      </div>
      <p>Aquí puedes cambiar las configuraciones de tu cuenta.</p>
      <div className="settings-card">
        <div className="settings-menu">
          <button className="settings-option" onClick={() => setSelectedOption('resetPassword')}>Restablecer Contraseña</button>
          <button className="settings-option">Notificaciones</button>
          <button className="settings-option settings-danger" onClick={() => setSelectedOption('deleteAccount')}>Eliminar Cuenta</button>
        </div>
        <div className="settings-content">
          {selectedOption === 'resetPassword' && (
            <div>
              <h3>Restablecer Contraseña</h3>
              <input
                type="email"
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleResetPassword}>Enviar Correo de Restablecimiento</button>
            </div>
          )}
          {selectedOption === 'deleteAccount' && (
            <div>
              <h3>Eliminar Cuenta</h3>
              <p>Advertencia: Esta acción es irreversible. ¿Estás seguro?</p>
              <button className="settings-option settings-danger" onClick={handleDeleteAccount}>Eliminar Cuenta</button>
            </div>
          )}
          {selectedOption === '' && <p>Selecciona una opción del menú para ver más detalles.</p>}
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
