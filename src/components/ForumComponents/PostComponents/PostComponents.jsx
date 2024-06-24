import React from 'react';

const Post = ({ title, body, imageUrl, createdAt, author, zone }) => {
  const date = new Date(createdAt.seconds * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

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
        </div>
        <a>Publicado por {author || 'Transportista'}</a>
        <h4 className="font-weight-bold mb-3">{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
