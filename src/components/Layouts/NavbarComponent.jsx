import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { signOutUser, getCurrentUser, signInWithGoogle } from '../../../backend/firebaseconfig';
import { UserContext } from '../../../backend/config/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      await signOutUser();
      setUser(null);
      setIsLoggedIn(false);
      window.location.reload(); // Recargar la página después de cerrar sesión
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const currentUser = await signInWithGoogle();
      if (currentUser) {
        setUser(currentUser);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
        setIsLoggedIn(false);
      }
    };
    checkUser();
  }, [setUser]);

  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row py-1 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{ transform: 'scaleX(-1)' }} />
                +52 123 456 7890
              </small>
              <small className="px-3">|</small>
              <small>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                contacto@Asociación.org
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="text-white px-2" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-0 py-lg-0 px-lg-5">
        <NavLink to="/" className="navbar-brand ml-lg-3">
          <h1 className="m-2 text-uppercase text-primary" style={{ fontSize: '2rem' }}>
            <FontAwesomeIcon icon={faTruck} className="mr-2" style={{ fontSize: '2.2rem' }} />
            Asociación
          </h1>
        </NavLink>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-lg-6" id="navbarCollapse">
          <div className="navbar-nav m-0 py-0">
            <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">Inicio</NavLink>
            <NavLink to="/About" className="nav-item nav-link" activeClassName="active">Quiénes Somos</NavLink>
            <NavLink to="/Service" className="nav-item nav-link" activeClassName="active">¿Buscas hombres camión?</NavLink>
            <NavLink to="/Forum" className="nav-item nav-link" activeClassName="active">Buro de clientes</NavLink>
            <NavLink to="/Contact" className="nav-item nav-link" activeClassName="active">Contacto</NavLink>
          </div>
        </div>
        <div className="navbar-nav ml-auto">
          {isLoggedIn ? (
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                {user && user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                )}
                {user && user.displayName}
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleLogin}>
              Iniciar Sesión con Google
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
