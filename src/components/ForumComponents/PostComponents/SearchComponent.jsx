import React, { useState, useEffect } from 'react';
import Post from './PostComponents.jsx';
import PostPlaceholder from './PostCss/PostPlaceholder.jsx';
import RecentPost from './RecentPost.jsx';
import { getFirestore, collection, onSnapshot, query, orderBy, getDocs } from 'firebase/firestore';
import { getCurrentUser } from '../../../../backend/firebaseconfig.js';
import './PostCss/SearchComponent.css';

const SearchComponent = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentPosts, setRecentPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeRecentPost, setActiveRecentPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [selectedZone, setSelectedZone] = useState('');
  const [zones, setZones] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    getCurrentUser().then(user => {
      setCurrentUser(user);
    });

    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setRecentPosts(postsData.slice(0, 5));
      setLoading(false);

      // Obtener zonas únicas
      const uniqueZones = [...new Set(postsData.map(post => post.zone))];
      setZones(uniqueZones);
    });

    return () => unsubscribe();
  }, [db]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeletePost = (postId) => {
    console.log(`Eliminar post con ID: ${postId}`);
  };

  const fetchComments = async (postId) => {
    const q = query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const commentsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setComments(commentsData);
  };

  const handleRecentPostClick = (post) => {
    setActiveRecentPost(post);
    fetchComments(post.id);
  };

  const handleCloseActiveRecentPost = () => {
    setActiveRecentPost(null);
    setComments([]);
  };

  const handleTagClick = (zone) => {
    setSelectedZone(zone);
  };

  const handleClearFilters = () => {
    setSelectedZone('');
    setSearchTerm('');
  };

  const filteredPosts = posts.filter(post => 
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.body.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedZone === '' || post.zone === selectedZone)
  );

  return (
    <div className={`container py-5 ${activeRecentPost ? 'dark-background' : ''}`}>
      {activeRecentPost && (
        <div className="active-recent-post-container" style={styles.activeRecentPostContainer}>
          <div className="active-recent-post" style={styles.activeRecentPost}>
            <div className="post-content">
              <Post 
                id={activeRecentPost.id}
                title={activeRecentPost.title}
                body={activeRecentPost.body}
                imageUrl={activeRecentPost.imageUrl}
                createdAt={activeRecentPost.createdAt}
                author={activeRecentPost.author}
                zone={activeRecentPost.zone}
                currentUser={currentUser}
                onDelete={handleDeletePost}
                fromRecentPosts={true}
              />
              <button 
                className="btn btn-primary close-button" 
                onClick={handleCloseActiveRecentPost}
                style={styles.closeButton}>
                X
              </button>
            </div>
            <div className="post-comments">
              <h4>Comentarios</h4>
              {comments.length > 0 ? (
                comments.map(comment => (
                  <div key={comment.id} className="bg-light p-2 mb-2 rounded">
                    <p className="mb-0"><strong>{comment.author}</strong>: {comment.text}</p>
                  </div>
                ))
              ) : (
                <p>No hay comentarios aún.</p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-lg-8">
          <h2 className="font-weight-bold mb-3">
            <div style={{ color: '#347AB6' }}>
              Destacados 
            </div>
          </h2>
          {loading ? (
            <>
              {[1, 2, 3].map((_, index) => (
                <PostPlaceholder key={index} />
              ))}
            </>
          ) : (
            filteredPosts.map(post => (
              <Post 
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                imageUrl={post.imageUrl}
                createdAt={post.createdAt}
                author={post.author}
                zone={post.zone}
                currentUser={currentUser}
                onDelete={handleDeletePost}
              />
            ))
          )}
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="mb-5">
            <div className="bg-secondary" style={{ padding: '30px' }}>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control border-0 p-4" 
                  placeholder="Buscar..." 
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-primary border-primary text-white">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
         
          <div className="mb-5">
            {activeRecentPost ? (
              <button className="btn btn-primary mt-3">
                Agregar Comentario
              </button>
            ) : (
              <div className="mb-5">
                <h3 className="mb-4">Posts Recientes</h3>
                {recentPosts.map(post => (
                  <RecentPost key={post.id} post={post} onClick={handleRecentPostClick} />
                ))}
              </div>
            )}
          </div>
          <div className="mb-5">
            <h3 className="mb-4">Etiquetas </h3>
            <div className="d-flex flex-wrap m-n1">
              {zones.map(zone => (
                <button 
                  className={`btn btn-secondary m-1 ${selectedZone === zone ? 'active' : ''}`} 
                  key={zone} 
                  onClick={() => handleTagClick(zone)}
                >
                  {zone}
                </button>
              ))}
            </div>
            {selectedZone && (
              <button 
                className="btn btn-secondary m-1" 
                onClick={handleClearFilters}
              >
                Quitar Filtros
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  activeRecentPostContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeRecentPost: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '90%',
    overflowY: 'auto'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default SearchComponent;
