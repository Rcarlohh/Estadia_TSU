import React, { useState } from 'react';

const Post = ({ id, title, body, imageUrl, createdAt, author, zone, currentUser, onDelete }) => {
  const [showFullBody, setShowFullBody] = useState(false);

  const date = new Date(createdAt.seconds * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  const isAuthor = currentUser && currentUser.email === author;

  const handleDownloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href + `/post/${id}`);
    alert('Enlace copiado al portapapeles');
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const toggleShowFullBody = () => {
    setShowFullBody(!showFullBody);
  };

  const maxBodyLength = 100; 

  return (
    <div className="pb-3">
      {imageUrl && (
        <div className="position-relative">
          <img className="img-fluid w-100" src={imageUrl} alt={title} />
          <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
            style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
            <h4 className="font-weight-bold mb-n1">{day}</h4>
            <small className="text-white text-uppercase">{month}</small>
          </div>
        </div>
      )}
      <div className="bg-secondary mb-3" style={{ padding: '30px' }}>
        <div className="d-flex mb-3">
          {zone && (
            <div className="d-flex align-items-center ml-3">
              <i className="far fa-bookmark text-primary"></i>
              <a className="text-muted ml-2" href="#">{zone}</a>
            </div>
          )}
          <div className="ml-auto">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="menuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Opciones
              </button>
              <ul className="dropdown-menu" aria-labelledby="menuButton">
                {imageUrl && <li><button className="dropdown-item" onClick={handleDownloadImage}>Descargar Imagen</button></li>}
                <li><button className="dropdown-item" onClick={handleShare}>Compartir</button></li>
                {isAuthor && <li><button className="dropdown-item" onClick={handleDelete}>Eliminar</button></li>}
              </ul>
            </div>
          </div>
        </div>
        <a>Publicado por {author || 'Transportista'}</a>
        <h4 className="font-weight-bold mb-3">{title}</h4>
        <p>
          {showFullBody ? body : `${body.substring(0, maxBodyLength)}...`}
          {body.length > maxBodyLength && (
            <button onClick={toggleShowFullBody} className="btn btn-link p-0 ml-2">
              {showFullBody ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Post;
