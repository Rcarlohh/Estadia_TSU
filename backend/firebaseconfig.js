import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';  // Importar Firebase Storage y funciones adicionales

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);  // Inicializar Firebase Storage

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const signOutUser = () => {
  return signOut(auth)
    .then(() => {
      console.log('Sesión cerrada exitosamente');
    })
    .catch((error) => {
      console.error('Error al cerrar sesión:', error);
      throw error;
    });
};

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};

// Función para subir una imagen a Firebase Storage y obtener la URL de descarga
const uploadImage = async (file) => {
  if (!file) return null;

  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(storageRef);
  return imageUrl;
};

export { signInWithGoogle, signInWithEmail, signOutUser, getCurrentUser, db, storage, uploadImage };
