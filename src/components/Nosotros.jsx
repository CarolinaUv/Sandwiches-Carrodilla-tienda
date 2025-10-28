import React from "react";
import "./Nosotros.css";
import flotacamionetas from "../assets/img/flotacamioneta.jpg";

const Nosotros = () => {
  return (
    <section id= "nosotros" className="nosotros">
      <div className="nosotros-container">
        <div className="nosotros-texto">
          <h2>Sobre Nosotros</h2>

          <h3>Quiénes somos</h3>
          <p>
            Somos una empresa familiar con más de 12 años de trayectoria, dedicada a elaborar
            productos frescos, sabrosos y de calidad.
          </p>
          <p>
            Desde nuestros comienzos, nos destacamos por el compromiso, la dedicación y el cuidado
            en cada detalle.
          </p>

          <h3>Nuestros productos</h3>
          <p>
            Elaboramos a diario una gran variedad de sandwiches de miga, ensaladas de frutas,
            postres, hamburguesas y milanesas, ideales para compartir en reuniones, eventos o
            disfrutar en casa.
          </p>
          <p>
            Nuestra misión es ofrecer comidas ricas, prácticas y frescas, hechas con ingredientes
            seleccionados y el toque casero que nos caracteriza.
          </p>
        </div>

        <div className="nosotros-imagen">
          <img src={flotacamionetas} alt="Camionetas Carrodilla Sandwich" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

