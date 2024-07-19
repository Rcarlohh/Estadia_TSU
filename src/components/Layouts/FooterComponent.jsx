import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="scroll-to-top-btn" 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999',
            backgroundColor: '#d93012',
            color: '#fff',
            borderRadius: '50%',
            border: 'none',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      {/* Sección de contacto */}
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          {/* Información de contacto */}
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Ponte en Contacto</h3>
                <p className="text-white"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2"/>123 Calle, Ciudad de México, MX</p>
                <p className="text-white"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2"style={{ transform: 'scaleX(-1)' }}/>+52 123 456 7890</p>
                <p className="text-white"><FontAwesomeIcon icon={faEnvelope} className="mr-2"/>contacto@Asociación.org.mx</p>
                <div className="d-flex justify-content-start mt-4">
                  {/* Enlaces a redes sociales de Asociación */}
                </div>
              </div>
              {/* Enlaces rápidos */}
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Enlaces Rápidos</h3>
                {/* Lista de enlaces */}
              </div>
            </div>
          </div>
          {/* Suscripción al boletín */}
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Boletín Informativo</h3>
            <p className="text-white">[Breve texto sobre las ventajas de suscribirse al boletín de Asociación.]</p>
            {/* Formulario de suscripción */}
          </div>
        </div>
      </div>
      {/* Pie de Página */}
      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: '#3E3E4E !important' }}>
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">&copy; <a href="#">Nombre de tu Sitio</a>. Todos los Derechos Reservados.</p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            {/* Enlaces legales o de interés */}
          </div>
        </div>
      </div>
     
    </>
  );
}

export default FooterComponent;
