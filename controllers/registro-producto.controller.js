import { productServices } from "../service/admin-service.js";

const formulario =  document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const numeroAleatorio = Math.floor(Math.random() * 6)
    const imagen  = `../assets/producto-${numeroAleatorio}.png`;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-product]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    
    productServices
        .crearProducto(imagen, categoria, nombre, precio, descripcion)
        .then(() => {
          window.location.href = "/screens/productos.html"
        })
        .catch((err) => console.log(err));
});

