import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h2>¡Bienvenidos a Carrodilla Sandwich!</h2>
        <p>Sandwiches frescos, caseros y hechos con amor.</p>
        <a href="#productos" className="hero-btn">Ver productos</a>
      </div>
    </section>
  );
}
