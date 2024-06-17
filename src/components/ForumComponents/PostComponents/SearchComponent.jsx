import React, { useState, useEffect } from 'react';
import Post from './PostComponents.jsx';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const SearchComponent = () => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, [db]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="font-weight-bold mb-3">
            <div style={{ color: '#347AB6' }}>
              Destacados 
            </div>
          </h2>
          {posts.map(post => (
            <Post 
              key={post.id}
              title={post.title}
              body={post.body}
              imageUrl={post.imageUrl}
              createdAt={post.createdAt}
              author={post.author}
            />
          ))}
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="mb-5">
            <div className="bg-secondary" style={{ padding: '30px' }}>
              <div className="input-group">
                <input type="text" className="form-control border-0 p-4" placeholder="" />
                <div className="input-group-append">
                  <span className="input-group-text bg-primary border-primary text-white">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-4">Categorias</h3>
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
            <h3 className="mb-4">Post Recientes</h3>
            <div className="d-flex mb-3">
              <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
              <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img className="img-fluid" src="img/blog-2.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
              <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
              <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img className="img-fluid" src="img/blog-2.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
              <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
            <div className="d-flex mb-3">
              <img className="img-fluid" src="img/blog-1.jpg" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
              <a href="" className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: '80px' }}>
                Lorem ipsum dolor sit amet consec adipis elit
              </a>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-4">Etiquetas </h3>
            <div className="d-flex flex-wrap m-n1">
              <a href="" className="btn btn-secondary m-1">Zona Norte</a>
              <a href="" className="btn btn-secondary m-1">Zona Sur</a>
              <a href="" className="btn btn-secondary m-1">Zona Sureste</a>
              <a href="" className="btn btn-secondary m-1">Zona Bajio</a>
              <a href="" className="btn btn-secondary m-1">Zona Centro</a>
              <a href="" className="btn btn-secondary m-1">Zona Occidental</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
