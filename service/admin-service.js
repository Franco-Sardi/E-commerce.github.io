
const listaProductos = () => 
fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({imagen, categoria, nombre, precio, id: uuid.v4(), descripcion})
                })
                .then( respuesta => respuesta.json())
    }

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}` ,{
        method: 'DELETE'
        });
    };

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
};
