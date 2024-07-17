import React from 'react';

const DeletePostModal = ({ onClose, onDelete }) => {
  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Confirmar Eliminación</h4>
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que deseas eliminar este post?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;
