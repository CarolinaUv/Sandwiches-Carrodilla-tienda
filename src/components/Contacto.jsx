import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Contacto() {
  const [user, setUser] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usuarioActual) => {
      setUser(usuarioActual);
      if (usuarioActual) {
        setEmail(usuarioActual.email);
      }
    });
    return () => unsub();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      nombre,
      email,
      mensaje,
      user: user ? user.email : "anónimo",
    });

    setEnviado(true);
    setNombre("");
    if (!user) setEmail(""); 
    setMensaje("");
  };

  return (
    <section id="contacto" className="contacto" style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#fff8ec" }}>
      <h2 style={{ color: "#c23b22", marginBottom: "20px" }}>Contacto</h2>

      {enviado ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ¡Gracias por tu mensaje! Te responderemos pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px" }}
          />

          {}
          {!user && (
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px" }}
            />
          )}

          <textarea
            placeholder="Escribí tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px", height: "120px" }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#c23b22",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      )}

      {user && (
        <p style={{ marginTop: "15px", color: "#555" }}>
          Estás enviando como: <strong>{user.email}</strong>
        </p>
      )}
    </section>
  );
}

