import React from 'react';

const PostMenuComponent = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-link dropdown-toggle" type="button" id="postMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="postMenuButton">
        <a className="dropdown-item" href="#">Editar</a>
        <a className="dropdown-item" href="#">Eliminar</a>
        <a className="dropdown-item" href="#">Descargar Imagen</a>
      </div>
    </div>
  );
};

export default PostMenuComponent;
