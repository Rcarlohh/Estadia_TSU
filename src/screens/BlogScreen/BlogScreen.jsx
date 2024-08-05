import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlogCardComponent from '../../components/HomeComponents/BlogComponent/BlogCardComponent';
import { events } from './EventsData/EventsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TeamComponent from '../../components/AboutComponents/TeamComponent/TeamComponent';
import imgTeam1 from './../../assets/img/GERARDO-GONZALES-HIDALGO.jpg'
import imgTeam2 from './../../assets/img/team-2.jpg'
import imgTeam3 from './../../assets/img/team-3.jpg'
import imgTeam4 from './../../assets/img/team-4.jpg'
import './BlogComponent.css';

const BlogScreen = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const navigate = useNavigate();
  const { eventId } = useParams();

  useEffect(() => {
    if (eventId) {
      setActiveEvent(eventId);
    }
  }, [eventId]);

  const handleClose = () => {
    setActiveEvent(null);
    navigate('/Blog');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const eventDetails = events.find(event => event.id === activeEvent);

  return (
    <div>
      <nav className="navbar navbar-expand bg-dark w-100">
        <div className="container">
          <div className="row w-100 py-1 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center text-white">
                <small>
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{ transform: 'scaleX(-1)' }} />
                  +52 123 456 7890
                </small>
                <small className="px-3">|</small>
                <small>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  contacto@Asociacion.org
                </small>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-white px-2" href="https://www.facebook.com/AmotacOficial">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="text-white px-2" href="https://x.com/Amotac">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <button className="btn btn-primary ml-3" onClick={handleGoBack}>
                  Volver a Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="header text-center py-5">
        <h1 className='text-white'>Bienvenidos a AMOTAC</h1>
        <p className='text-white'>Los acontecimientos más relevantes de nuestra empresa</p>
      </header>

      <div className="container my-5">
        <section className="gallery mb-5">
          <h2>Galería de Imágenes</h2>
          <Carousel interval={3000} controls={false} indicators={false}>
            <Carousel.Item>
              <img className="d-block w-100" src="src\assets\img\BlogPictures\GERARDO-GONZALES-HIDALGO-2.jpeg" alt="Descripción de la imagen 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="src\assets\img\BlogPictures\GERARDO-GONZALES-HIDALGO-7.jpeg" alt="Descripción de la imagen 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="src\assets\img\BlogPictures\GERARDO-GONZALES-HIDALGO-14.jpeg" alt="Descripción de la imagen 3" />
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="events mb-5">
          <h2>Acontecimientos</h2>
          <TransitionGroup className="row">
            {events.map((event) => (
              <CSSTransition key={event.id} timeout={500} classNames="fade">
                <BlogCardComponent
                  key={event.id}
                  imgSrc={event.imgSrc}
                  date={event.date}
                  category={event.category}
                  title={event.title}
                  description={event.description}
                  link={() => setActiveEvent(event.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </section>
        <h2 className="text-center text-primary">Delegados Actuales</h2>
        <div className="container-fluid pt-5">
        
            <div className="container">
                <div className="row">
                
                <TeamComponent
                    name="Gerardo Gonzales García"
                    role="Delegado Estatal de Hidalgo"
                    imgSrc={imgTeam1}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                <TeamComponent
                    name="Guillermo Gómez "
                    role="Delegado de Morelos"
                    imgSrc={imgTeam2}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                   <TeamComponent
                    name="Jorge Martínez"
                    role="Delegado de la Zona Sur (Mérida, Yucatán)"
                    imgSrc={imgTeam2}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                   <TeamComponent
                    name="Jorge Martínez"
                    role="Delegado de la Zona Sur (Mérida, Yucatán)"
                    imgSrc={imgTeam2}
                    socialLinks={[
                    { platform: 'twitter', url: '#' },
                    { platform: 'facebook-f', url: '#' },
                    { platform: 'linkedin-in', url: '#' },
                    { platform: 'instagram', url: '#' },
                    ]}
                />
                
                </div>
            </div>
        </div>
      </div>

      {eventDetails && (
        <div className={`expanded-card ${activeEvent ? 'show' : 'd-none'}`} id={activeEvent}>
          <div className="card mb-4">
            <img src={eventDetails.imgSrc} className="card-img-top" alt={eventDetails.title} />
            <div className="card-body">
              <h5 className="card-title">{eventDetails.title}</h5>
              <p className="card-text">{eventDetails.fullDescription}</p>
              <button className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogScreen;
