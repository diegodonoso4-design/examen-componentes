import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDI45pCxqJqaFDjxv6ZuLeGre_JUe9T8rY",
  authDomain: "gestion-proyectos-ddonos-7db17.firebaseapp.com",
  projectId: "gestion-proyectos-ddonos-7db17",
  storageBucket: "gestion-proyectos-ddonos-7db17.firebasestorage.app",
  messagingSenderId: "8276565013",
  appId: "1:8276565013:web:9c5f5434df9da58bf0c21c"
};

// Inicializar la conexión del proyecto React con el backend de Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export default firebase;