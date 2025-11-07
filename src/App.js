import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login";

import { CartProvider } from "./context/CartContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usuarioActual) => {
      setUser(usuarioActual);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => signOut(auth);

  return (
    <CartProvider>
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />

      {}
      <Contacto />

      {}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        {user ? (
          <>
            <p style={{ fontWeight: "500" }}>
              Sesión iniciada como: {user.email}
            </p>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#c23b22",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <h3>Iniciá sesión</h3>
            <Login onLogin={() => console.log("Usuario logueado")} />
          </>
        )}
      </div>

      <Footer />
      <Cart />
    </CartProvider>
  );
}

export default App;


