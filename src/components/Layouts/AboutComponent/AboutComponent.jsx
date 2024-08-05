import React from 'react';
import PropTypes from 'prop-types';

const AboutComponent = ({ imageSrc, title, subtitle, description, videoSrc }) => {
  const handleVideoClick = () => {
    if (videoSrc) {
      window.open(videoSrc, '_blank');
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img className="img-fluid w-100" src={imageSrc} alt={title} />
            <div className="bg-primary text-dark text-center p-4">
              <h3 className="m-0">Más de 25 Años de Experiencia</h3>
            </div>
          </div>
          <div className="col-lg-7">
            <h6 className="text-primary text-uppercase font-weight-bold">{subtitle}</h6>
            <h1 className="mb-4">{title}</h1>
            <p className="mb-4">{description}</p>
            {videoSrc && (
              <div className="d-flex align-items-center pt-2">
                <button
                  type="button"
                  className="btn-play"
                  onClick={handleVideoClick}
                >
                  <span></span>
                </button>
                <h5 className="font-weight-bold m-0 ml-4">Ver Video</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

AboutComponent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoSrc: PropTypes.string,
};

export default AboutComponent;
