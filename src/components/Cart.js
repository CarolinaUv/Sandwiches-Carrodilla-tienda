import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { items, updateQty, removeItem, totalAmount, clear } = useCart();
  const [open, setOpen] = useState(false);

  const handleCheckout = () => {
    alert("Aquí iría la redirección segura a Stripe o MercadoPago (backend)");
  };

  return (
    <div className={`cart-container ${open ? "open" : ""}`}>
      {/* Botón flotante */}
      <button className="cart-toggle" onClick={() => setOpen(!open)}>
        🛒
        {items.length > 0 && <span className="cart-badge">{items.length}</span>}
      </button>

      {/* Panel del carrito */}
      <div className="cart-panel">
        <h3>Tu carrito</h3>
        {items.length === 0 ? (
          <p className="cart-empty">No hay productos en el carrito</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Finalizar compra
              </button>
              <button className="clear-btn" onClick={clear}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
