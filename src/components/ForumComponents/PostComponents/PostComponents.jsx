import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { db } from '../../../../backend/firebaseconfig';

const Post = ({ id, title, body, imageUrl, createdAt, author, zone, currentUser, onDelete }) => {
  const [showFullBody, setShowFullBody] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(collection(db, 'posts', id, 'comments'));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    };

    fetchComments();
  }, [id]);

  const handleAddComment = async () => {
    if (comment.trim()) {
      await addDoc(collection(db, 'posts', id, 'comments'), {
        text: comment,
        author: currentUser.email,
        createdAt: new Date(),
      });
      setComment('');
      setComments([...comments, { text: comment, author: currentUser.email, createdAt: new Date() }]);
    }
  };

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
        <div className="mt-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="btn btn-primary mb-3"
            style={{ borderRadius: '20px', padding: '0.25rem 1rem' }}
          >
            {showComments ? 'Ocultar comentarios' : `Comentarios (${comments.length})`}
          </button>
          {showComments && (
            <div className="mb-3">
              {comments.map((comment, index) => (
                <div key={index} className="bg-light p-2 mb-2 rounded">
                  <p className="mb-0"><strong>{comment.author}</strong>: {comment.text}</p>
                </div>
              ))}
              {currentUser && (
                <>
                  <button
                    onClick={() => setShowCommentInput(!showCommentInput)}
                    className="btn btn-primary mb-3"
                    style={{ borderRadius: '20px', padding: '0.25rem 1rem', position: 'relative', float: 'right' }}
                  >
                    {showCommentInput ? 'Cancelar' : 'Agregar comentario'}
                  </button>
                  {showCommentInput && (
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control mr-2"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Escribe un comentario..."
                      />
                      <button
                        onClick={handleAddComment}
                        className="btn btn-primary"
                        style={{ borderRadius: '20px', padding: '0.25rem 1rem' }}
                      >
                        Comentar
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
