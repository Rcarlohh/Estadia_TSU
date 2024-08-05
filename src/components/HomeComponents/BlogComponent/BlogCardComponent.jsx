import React from 'react';

const BlogCardComponent = ({ imgSrc, date, category, title, description, link }) => {
  const [month, day] = date.split(' '); // Separa el mes y el día

  return (
    <div className="col-md-6 mb-5">
      <div className="position-relative">
        <img className="img-fluid w-100" src={imgSrc} alt={title} />
        <div className="position-absolute d-flex flex-column align-items-center justify-content-center rounded-circle"
          style={{
            width: '60px',
            height: '60px',
            bottom: '-30px',
            right: '30px',
            backgroundColor: '#d93012',
            color: 'white',
            fontWeight: 'normal'
          }}>
          <div style={{ fontSize: '14px' }}>{month}</div>
          <div style={{ fontSize: '18px' }}>{day}</div>
        </div>
      </div>
      <div className="bg-secondary" style={{ padding: '30px' }}>
        <div className="d-flex mb-3">
          <div className="d-flex align-items-center ml-1">
            <i className="far fa-bookmark text-primary"></i>
            <a className="text-muted ml-2" href="#">{category}</a>
          </div>
        </div>
        <h4 className="font-weight-bold mb-3">{title}</h4>
        <p>{description}</p>
        <button className="border-bottom border-primary text-uppercase text-decoration-none btn-link" onClick={link}>Leer Más <i className="fa fa-angle-right"></i></button>
      </div>
    </div>
  );
};

export default BlogCardComponent;
