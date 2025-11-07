import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDZwcIx4ppM4AjGHvnh6oQjRKB27U5Svik",
  authDomain: "tienda-s-c.firebaseapp.com",
  projectId: "tienda-s-c",
  storageBucket: "tienda-s-c.firebasestorage.app",
  messagingSenderId: "439359305345",
  appId: "1:439359305345:web:c39ce5541fa600c5657f80",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); 
