import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db, uploadImage } from '../../../../../backend/firebaseconfig';  // Importar la función uploadImage

const EditPostModal = ({ onClose, post, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [image, setImage] = useState(null);

  const handleSave = async () => {
    const updatedData = {
      title,
      body,
    };

    if (image) {
      const imageUrl = await uploadImage(image);
      updatedData.imageUrl = imageUrl;
    }

    const postRef = doc(db, 'posts', post.id);
    await updateDoc(postRef, updatedData);
    onSave(updatedData);
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Editar Post</h4>
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Título</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Contenido</label>
              <textarea
                className="form-control"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Imagen</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {post.imageUrl && (
                <div>
                  <img src={post.imageUrl} alt="Imagen actual" style={{ width: '100%', marginTop: '10px' }} />
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
