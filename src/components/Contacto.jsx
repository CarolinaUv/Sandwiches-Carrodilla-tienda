import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // evita recargar la página al enviar

    emailjs
      .sendForm(
        "TU_SERVICE_ID",   // reemplazá con tu Service ID de EmailJS
        "TU_TEMPLATE_ID",  // reemplazá con tu Template ID de EmailJS
        form.current,
        "TU_PUBLIC_KEY"    // reemplazá con tu Public Key de EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito ✅");
          form.current.reset(); // limpia el formulario
        },
        (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje ❌");
        }
      );
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <textarea name="message" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
