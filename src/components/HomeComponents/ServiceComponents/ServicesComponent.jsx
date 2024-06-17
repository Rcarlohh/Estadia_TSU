import React from 'react';

const ServiceComponent = ({ title, icon, imgSrc, description, listItems }) => {
  return (
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
        <i className={`fa fa-2x ${icon} text-dark pr-3`}></i>
        <h6 className="text-white font-weight-medium m-0">{title}</h6>
      </div>
      <img src={imgSrc} alt={title} style={{maxWidth: '100%', height: 'auto'}} />
      <p>{description}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}><strong>{item.title}:</strong> {item.description}</li>
        ))}
      </ul>
      <p>Cada servicio está diseñado para garantizar seguridad, eficiencia y puntualidad en todas las entregas.</p>
    </div>
  );
}

export default ServiceComponent;
