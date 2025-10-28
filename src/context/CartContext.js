// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_v1", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + qty } : p
        );
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });
  };

  const updateQty = (productId, quantity) => {
    setItems(prev => prev.map(p => (p.id === productId ? { ...p, quantity } : p)).filter(p => p.quantity > 0));
  };

  const removeItem = (productId) => {
    setItems(prev => prev.filter(p => p.id !== productId));
  };

  const clear = () => setItems([]);

  const totalAmount = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clear, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
}
