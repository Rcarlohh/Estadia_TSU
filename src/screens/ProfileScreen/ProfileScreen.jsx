import React, { useState, useEffect, useContext } from 'react';
import { db, getCurrentUser, uploadImage } from '../../../backend/firebaseconfig';
import { collection, doc, getDoc, setDoc, query, where, getDocs } from 'firebase/firestore';
import { UserContext } from '../../../backend/config/UserContext';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/ForumComponents/PostComponents/PostComponents';
import './ProfileScreen.css';

const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageURL, setProfileImageURL] = useState('');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'UsuariosAppWeb', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setProfileImageURL(userData.profileImageURL);
        }
      }
    };

    const fetchUserPosts = async () => {
      if (user) {
        const postsQuery = query(collection(db, 'posts'), where('author', '==', user.email));
        const postSnapshots = await getDocs(postsQuery);
        const userPosts = postSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(userPosts);
      }
    };

    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        fetchUserProfile();
        fetchUserPosts();
      }
    };

    checkUser();
  }, [user, setUser]);

  const handleProfileImageChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      handleProfileImageUpload(e.target.files[0]);
    }
  };

  const handleProfileImageUpload = async (imageFile) => {
    if (imageFile && user) {
      const imageUrl = await uploadImage(imageFile);
      setProfileImageURL(imageUrl);
      await setDoc(doc(db, 'UsuariosAppWeb', user.uid), { profileImageURL: imageUrl }, { merge: true });
      alert('Imagen de perfil guardada');
    }
  };

  const maskEmail = (email) => {
    const [name, domain] = email.split('@');
    return `${name[0]}${'*'.repeat(name.length - 1)}@${domain}`;
  };

  const handleBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <div className="profile-screen d-flex justify-content-center">
      {user ? (
        <div className="row w-100">
          <div className="col-lg-4">
            <div className="card text-center" style={{ width: '100%' }}>
            <h1 className="card-title">Perfil</h1>
              <div className="cover-photo" style={{ backgroundImage: 'url(https://via.placeholder.com/800x200)' }}>
                <div className="profile-image-container">
                  <img src={profileImageURL || user.photoURL} alt="Foto de perfil" className="profile-image card-img-top" />
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">Nombre: {user.displayName}</p>
                <p className="card-text">Email: {maskEmail(user.email)}</p>
                <button onClick={handleBack} className="btn btn-secondary mt-3">Regresar</button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="posts-section">
              <h2>Publicaciones</h2>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <Post
                    key={index}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    imageUrl={post.imageUrl}
                    createdAt={post.createdAt}
                    author={post.author}
                    zone={post.zone}
                    currentUser={user}
                  />
                ))
              ) : (
                <p>No hay publicaciones</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default ProfileScreen;
