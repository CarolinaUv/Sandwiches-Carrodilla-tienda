import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCc_49XPdFDtJJTyjSZjlABtuSPhuE1rp8",
  authDomain: "sandwiches-carrodilla.firebaseapp.com",
  projectId: "sandwiches-carrodilla",
  storageBucket: "sandwiches-carrodilla.firebasestorage.app",
  messagingSenderId: "862049390235",
  appId: "1:862049390235:web:f781f4eb2e1874311b403e",
  measurementId: "G-5E4D6287M5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y exportarlo
export const db = getFirestore(app);
