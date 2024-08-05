import React, { useState } from 'react';
import './DeletePostModal.css'; // Asegúrate de incluir los estilos para el modal

const DeletePostModal = ({ onClose, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(); // Espera a que la función de eliminación se complete
    setIsDeleting(false); // Opcional: Puedes cerrar el modal aquí si es necesario
  };

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
            {isDeleting ? (
              <div className="delete-status">
                <p>Eliminando...</p>
                <div className="spinner"></div>
              </div>
            ) : (
              <p>¿Estás seguro de que deseas eliminar este post?</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={isDeleting}>
              Cancelar
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete} disabled={isDeleting}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;
