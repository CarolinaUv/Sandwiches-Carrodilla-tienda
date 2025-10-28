import React from "react";
import productos from "../data/products.json";
import ProductoCard from "./ProductoCard";
import "./Productos.css";

export default function Productos() {
  return (
    <section id="productos" className="productos">
      <h2>Nuestros Productos</h2>
      <div className="productos-grid">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}
