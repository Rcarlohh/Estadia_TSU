import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LoginModalComponent.css';
import { signInWithGoogle, signInWithEmail } from '../../../../backend/firebaseconfig'; 
import { UserContext } from '../../../../backend/config/UserContext';

const LoginModalComponent = ({ isOpen, onClose }) => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      onClose(); // Cierra el modal si el usuario ya está autenticado
    }
  }, [user, onClose]);

  if (!isOpen || user) return null;

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((user) => {
        console.log(user);
        setUser(user);
        window.location.reload();
        onClose(); // Cierra el modal después de iniciar sesión
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailLogin = () => {
    signInWithEmail(email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        window.location.reload();
        onClose(); // Cierra el modal después de iniciar sesión
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-4 py-5 p-md-6 mx-md-4">
                <h5 className="text-white mb-4">¡Únete a nuestra comunidad de hombres camioneros y clientes!</h5>
                <p className="small mb-0">
                  Descubre experiencias, comparte anécdotas y conecta con otros miembros.
                  Inicia sesión para acceder a todas las publicaciones del foro y formar parte de la conversación.
                </p>
                <br/>
                <button className="btn btn-secondary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleGoogleLogin}>
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                  Continuar con Google
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-body p-md-4 mx-md-3">
                <div className="text-center">
                  <Link to="/">X</Link>
                  <h4 className="mt-5 mb-4 pb-6">Inicia Sesión</h4>
                </div>
                <form>
                  <div className="form-outline mb-1">
                    <input 
                      type="email" 
                      id="form2Example11" 
                      className="form-control" 
                      placeholder="Ej. truckdriver1@asociacion.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="form2Example11"></label>
                  </div>
                  <div className="form-outline mb-1">
                    <input 
                      type="password" 
                      id="form2Example22" 
                      className="form-control" 
                      placeholder="Ej. TruckBlue2102$"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="form2Example22"></label>
                  </div>
                  <div className="text-center pt-0 mb-1 pb-1">
                    <button className="btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleEmailLogin}>
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModalComponent;
