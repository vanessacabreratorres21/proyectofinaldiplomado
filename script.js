// URL de tu backend
const API_URL = "http://localhost:3000/api/productos";

async function cargarProductos() {
  try {
    const respuesta = await fetch(API_URL);
    const productos = await respuesta.json();

    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(prod => {
      const item = document.createElement("div");
      item.innerHTML = `
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
      `;
      contenedor.appendChild(item);
    });
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

// Cargar al abrir la página
cargarProductos();
