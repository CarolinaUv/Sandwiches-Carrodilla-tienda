import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; 

export async function uploadProduct(producto) {
  try {
    const productosRef = collection(db, "productos"); 
    await addDoc(productosRef, producto);
    console.log("Producto agregado:", producto.nombre);
  } catch (error) {
    console.error("Error al subir producto:", error);
  }
}
