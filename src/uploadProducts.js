import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import productos from "./data/products.json"; // ⚠️ Ajustá según tu ruta real

async function subirProductos() {
  const productosCollection = collection(db, "productos");

  for (const item of productos) {
    try {
      await addDoc(productosCollection, item);
      console.log(`✅ Producto agregado: ${item.nombre || item.id}`);
    } catch (error) {
      console.error("❌ Error al agregar producto:", error);
    }
  }

  console.log("🚀 Todos los productos fueron cargados a Firestore.");
}

subirProductos();
