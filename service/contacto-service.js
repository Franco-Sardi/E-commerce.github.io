
const listaMensaje = () => 
fetch("http://localhost:3000/contactos").then((respuesta) => respuesta.json());

const crearMensaje = (nome,mensaje) => {
    return fetch("http://localhost:3000/contactos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome,mensaje})
                })
                .then( respuesta => respuesta.json())
    }



export const contactoService = {
    listaMensaje,
    crearMensaje,
};
