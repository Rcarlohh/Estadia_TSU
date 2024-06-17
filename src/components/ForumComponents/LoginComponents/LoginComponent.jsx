import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../LoginComponents/LoginComponent.css';

const LoginComponent = () => {
  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black" style={{ borderRadius: '20px' }}>
              <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h5 className="text-white mb-4">¡Únete a nuestra comunidad de hombres camioneros y clientes!</h5>
                    <p className="small mb-0">
                      Descubre experiencias, comparte anécdotas y conecta con otros miembros.
                      Inicia sesión para acceder a todas las publicaciones del foro y formar parte de la conversación.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-body p-md-4 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-2 mb-4 pb-0">Inicia Sesión</h4>
                    </div>
                    <form>
                      <div className="form-outline mb-1">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Ej. truckdriver1@asociacion.com"
                        />
                        <label className="form-label" htmlFor="form2Example11">
                      
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Ej. TruckBlue2102$"
                        />
                        <label className="form-label" htmlFor="form2Example22">
                   
                        </label>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          style={{ borderRadius: '20px' }}
                        >
                          Ingresar
                        </button>
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          style={{ borderRadius: '20px' }}
                        >
                          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                          Iniciar sesión con Google
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
