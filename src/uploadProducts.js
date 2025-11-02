import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // ✅ nuevo import correcto


// Ejemplo para subir un producto:
export async function uploadProduct(producto) {
  try {
    const productosRef = collection(db, "productos"); // ✅ pasamos db como primer parámetro
    await addDoc(productosRef, producto);
    console.log("Producto agregado:", producto.nombre);
  } catch (error) {
    console.error("Error al subir producto:", error);
  }
}
