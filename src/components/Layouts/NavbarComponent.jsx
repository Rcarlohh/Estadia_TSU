import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTruck, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Aquí puedes manejar la lógica de cierre de sesión
    setIsLoggedIn(false);
  };

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
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-0 py-lg-0 px-lg-3">
        <NavLink to="/" className="navbar-brand ml-lg-3">
          <h1 className="m-2 text-uppercase text-primary" style={{ fontSize: '2rem' }}>
            <FontAwesomeIcon icon={faTruck} className="mr-2" style={{ fontSize: '2.2rem' }} />
            Asociación
          </h1>
        </NavLink>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-lg-5" id="navbarCollapse">
          <div className="navbar-nav m-0 py-0">
            <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">Inicio</NavLink>
            <NavLink to="/About" className="nav-item nav-link" activeClassName="active">Quiénes Somos</NavLink>
            <NavLink to="/Service" className="nav-item nav-link" activeClassName="active">¿Buscas hombres camión?</NavLink>
            <NavLink to="/Forum" className="nav-item nav-link" activeClassName="active">Buro de clientes</NavLink>
            <NavLink to="/Contact" className="nav-item nav-link" activeClassName="active">Contacto</NavLink>
            <NavLink to="/Profile"></NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
