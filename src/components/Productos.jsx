import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import ProductoCard from "./ProductoCard";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(lista);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <section id="productos" className="productos">
      <h2>Nuestros Productos</h2>
      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((p) => <ProductoCard key={p.id} producto={p} />)
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </section>
  );
}
