import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import { getFirestore, getDoc, doc } from "firebase/firestore";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />
      <Contacto />
      <Footer />
      <Cart />
    </CartProvider>
  );
}

export default App;

