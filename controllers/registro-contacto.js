import { contactoService } from "../service/contacto-service.js";

const formulario =  document.querySelector('[data-form3]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const mensaje = document.querySelector("[data-mensaje]").value;
    
  
    
    contactoService
        .crearMensaje(nome,mensaje)
        .then(() => {
          console.log("mensaje");
        })  
        .catch((err) => console.log(err));
});


