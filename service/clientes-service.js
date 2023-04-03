
const listaClientes = () => 
fetch("http://localhost:3000/clientes").then((respuesta) => respuesta.json());

const crearClientes = (email,password) => {
    return fetch("http://localhost:3000/clientes", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
                })
                .then( respuesta => respuesta.json())
    }
    const eliminarClientes = (id) => {
        return fetch(`http://localhost:3000/clientes/${id}` ,{
            method: 'DELETE'
            });
        };


export const clientServices = {
    listaClientes,
    crearClientes,
    eliminarClientes
};
