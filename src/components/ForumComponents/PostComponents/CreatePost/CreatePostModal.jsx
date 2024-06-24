import React, { useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './CreatePostModal.css'; // Importar el archivo CSS

// Configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializar Firebase solo si no hay aplicaciones inicializadas
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

const CreatePostModal = ({ onClose }) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, 'posts'), {
        title,
        body,
        imageUrl,
        zone,
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
