import React from 'react';
import migajamonyqueso from '../assets/img/migajamonyqueso.jpeg';
import minitriplemiga from '../assets/img/minitriplemiga.png';
import migasalameyqueso from '../assets/img/migasalameyqueso.jpeg';
import migacrudoyqueso from '../assets/img/migacrudoyqueso.jpeg';
import sandwichsalameyqueso from '../assets/img/sandwichsalameyqueso.jpeg';
import sandwichprimavera from '../assets/img/sandwichprimavera.png';
import triplemigasalvado from '../assets/img/triplemigasalvado.png';
import sandwichtipocampo from '../assets/img/sandwichtipocampo.png';
import sandwichmilanesapanarabe from '../assets/img/sandwichmilanesapanarabe.jpeg';
import lomopanarabe from '../assets/img/lomopanarabe.jpeg';
import hamburguesa1 from '../assets/img/hamburguesa1.jpeg';
import flan from '../assets/img/flan.jpeg';
import ensaladadefrutas from '../assets/img/ensaladadefrutas.jpeg';
import postre from '../assets/img/postre.jpeg';
import './ProductoCard.css';
import { useCart } from '../context/CartContext'; 

const imageMap = {
  'migajamonyqueso.jpeg': migajamonyqueso,
  'minitriplemiga.png': minitriplemiga,
  'migasalameyqueso.jpeg': migasalameyqueso,
  'migacrudoyqueso.jpeg': migacrudoyqueso,
  'sandwichprimavera.png': sandwichprimavera,
  'triplemigasalvado.png': triplemigasalvado,
  'sandwichtipocampo.png': sandwichtipocampo,
  'sandwichsalameyqueso.jpeg': sandwichsalameyqueso,
  'sandwichmilanesapanarabe.jpeg': sandwichmilanesapanarabe,
  'lomopanarabe.jpeg': lomopanarabe,
  'hamburguesa1.jpeg': hamburguesa1,
  'flan.jpeg':flan,
  'ensaladadefrutas.jpeg': ensaladadefrutas,
  'postre.jpeg': postre,
};

function ProductoCard({ producto }) {
  const { addItem } = useCart(); 

  const handleAddToCart = () => {
    const productData = {
      id: producto.id, 
      name: producto.nombre,
      price: producto.precio,
      image: imageMap[producto.imagen],
    };
    addItem(productData, 1);
  };

  return (
    <div className="producto-card">
      <img src={imageMap[producto.imagen]} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <span>${producto.precio}</span>
      <button
        className="btn-agregar"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductoCard;
