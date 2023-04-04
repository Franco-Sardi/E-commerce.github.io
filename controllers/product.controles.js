import { productServices } from "../service/admin-service.js";

const crearNuevoProducto = (id, nombre, precio, imagen, categoria, link) => {
    const producto = document.createElement("div")
    producto.classList.add("productos__producto")
    const contenido = `
                            <div class="productos__edit">
                                <button class= "productos__basura" id="${id}">
                                <img src="../assets/basura.png" alt="Trash">
                                </button>
                                
                            </div>
                            <img src="${imagen}" alt="Producto" class="productos__img" style="width:176px">
                            <p style="width:176px" class="productos__name">${nombre}</p>
                            <p class="productos__price">$${precio}</p>
                            <p class="productos__categoria">${categoria}</p>
                            <a class="productos__ver" href="${link}">Ver Producto</a>
                        `;
    producto.innerHTML = contenido;
    const btn = producto.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id
        productServices
        .eliminarProducto(id)
        .then((respuesta) => {
            console.log(respuesta);
        }).catch((err) => alert("Ocurrio un error"))
    });
    
    return producto;
};

const table = document.querySelector("[data-table]")

productServices
    .listaProductos()
    .then((data) => {
        data.forEach(({id,nombre,precio,imagen,categoria,link}) => {
            const nuevoProducto = crearNuevoProducto(id,nombre,precio,imagen,categoria,link)
            table.appendChild(nuevoProducto)
        });
    }).catch((error) => alert ("Ocurrio un error"));

