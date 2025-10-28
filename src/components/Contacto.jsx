import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
