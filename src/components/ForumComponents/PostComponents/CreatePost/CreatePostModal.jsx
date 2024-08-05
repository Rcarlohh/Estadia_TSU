import React, { useState, useContext } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../../../../backend/firebaseconfig';
import { UserContext } from '../../../../../backend/config/UserContext.jsx';
import './CreatePostModal.css';

const quickMessages = [
  'Este es un mensaje rápido.',
  '¡No te pierdas este evento!',
  'Recuerda seguirnos en nuestras redes sociales.',
  '¡Participa y gana premios!',
];

const CreatePostModal = ({ onClose }) => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [zone, setZone] = useState('Zona Norte');
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleZoneChange = (event) => {
    setZone(event.target.value);
  };

  const handleQuickMessageClick = (message) => {
    setBody((prevBody) => prevBody + ' ' + message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      if (image) {
        const imageRef = ref(getStorage(), `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, 'posts'), {
        title,
        body,
        imageUrl,
        zone,
        author: user.email,
        createdAt: new Date(),
      });

      setLoading(false);
      onClose(true, 'Publicación creada con éxito');
    } catch (error) {
      console.error('Error al crear la publicación:', error);
      setLoading(false);
      onClose(false, 'Error al crear la publicación');
    }
  };

  return (
    <div className="create-post-modal">
      <h2>Nueva Publicación</h2>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Cuerpo</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          ></textarea>
          <div className="quick-messages">
            {quickMessages.map((message, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleQuickMessageClick(message)}
                className="btn-quick-message"
              >
                {message}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zone">Zona</label>
          <select id="zone" value={zone} onChange={handleZoneChange} required>
            <option value="Zona Norte">Zona Norte</option>
            <option value="Zona Sur">Zona Sur</option>
            <option value="Zona Sureste">Zona Sureste</option>
            <option value="Zona Bajio">Zona Bajio</option>
            <option value="Zona Occidental">Zona Occidental</option>
            <option value="Zona Centro">Zona Centro</option>
          </select>
        </div>
        <button type="submit" disabled={loading} className="btn-submit">
          {loading ? 'Publicando...' : 'Publicar'}
        </button>
      </form>
    </div>
  );
};

export default CreatePostModal;
