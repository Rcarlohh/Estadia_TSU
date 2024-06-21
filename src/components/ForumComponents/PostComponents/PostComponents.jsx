import React from 'react';
import blog from '../../../assets/img/blog.jpg'; // Considera usar una imagen predeterminada si no hay una imagen proporcionada

const Post = ({ title, body, imageUrl, createdAt, author }) => {
  const date = new Date(createdAt.seconds * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (
    <div className="pb-3">
      <div className="position-relative">
        <img className="img-fluid w-100" src={imageUrl || blog} alt={title} />
        <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
          style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
          <h4 className="font-weight-bold mb-n1">{day}</h4>
          <small className="text-white text-uppercase">{month}</small>
        </div>
        <div className="position-absolute" style={{ top: '20px', right: '20px' }}>
        </div>
      </div>
      <div className="bg-secondary mb-3" style={{ padding: '30px' }}>
        <div className="d-flex mb-3">
          <div className="d-flex align-items-center ml-3">
            <i className="far fa-bookmark text-primary"></i>
            <a className="text-muted ml-1" href="">Zona Norte</a>
          </div>
        </div>
        <a>Publicado por Transportista </a>
        <h4 className="font-weight-bold mb-3">{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
