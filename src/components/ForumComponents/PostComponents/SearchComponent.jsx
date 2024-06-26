import React, { useState, useEffect } from 'react';
import Post from './PostComponents.jsx';
import { getFirestore, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { getCurrentUser } from '../../../../backend/firebaseconfig.js'; 

const SearchComponent = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags] = useState(['Zona Norte', 'Zona Sur', 'Zona Sureste', 'Zona Bajio', 'Zona Centro', 'Zona Occidental']);
  const [currentUser, setCurrentUser] = useState(null);
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
    });

    return () => unsubscribe();
  }, [db]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeletePost = (postId) => {
    // Lógica para eliminar el post
    console.log(`Eliminar post con ID: ${postId}`);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="font-weight-bold mb-3">
            <div style={{ color: '#347AB6' }}>
              Destacados 
            </div>
          </h2>
          {filteredPosts.map(post => (
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
          ))}
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
            <h3 className="mb-4">Categorías</h3>
            <div className="bg-secondary" style={{ padding: '30px' }}>
              <ul className="list-inline m-0">
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <i className="fa fa-angle-right text-primary mr-2"></i>Quejas
                  </a>
                  <span className="badge badge-secondary badge-pill">150</span>
                </li>
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <i className="fa fa-angle-right text-primary mr-2"></i>Clientes
                  </a>
                  <span className="badge badge-secondary badge-pill">131</span>
                </li>
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <i className="fa fa-angle-right text-primary mr-2"></i>Transportistas
                  </a>
                  <span className="badge badge-secondary badge-pill">78</span>
                </li>
                <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <i className="fa fa-angle-right text-primary mr-2"></i>Quejas
                  </a>
                  <span className="badge badge-secondary badge-pill">56</span>
                </li>
                <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                  <a className="text-dark" href="#">
                    <i className="fa fa-angle-right text-primary mr-2"></i>Zonas 
                  </a>
                  <span className="badge badge-secondary badge-pill">98</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-4">Posts Recientes</h3>
            {recentPosts.map(post => (
              <div className="d-flex mb-3" key={post.id}>
                <img className="img-fluid" src={post.imageUrl } style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt={post.title} />
                <a href="#" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
                  {post.title}
                </a>
              </div>
            ))}
          </div>
          <div className="mb-5">
            <h3 className="mb-4">Etiquetas </h3>
            <div className="d-flex flex-wrap m-n1">
              {tags.map(tag => (
                <a href="#" className="btn btn-secondary m-1" key={tag}>{tag}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
