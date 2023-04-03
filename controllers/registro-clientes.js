import { clientServices } from "../service/clientes-service.js";

const formulario =  document.querySelector('[data-form2]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    
    if (email.length > 5 && password.length > 6) {
        window.location.href = "../screens/productos.html";
      } else {
        alert("email y contraseña deben tener mas de 6 caracteres.");
      }
    
    clientServices
        .crearClientes(email,password)
        .then(() => {
          console.log("cliente");
        })
        .catch((err) => console.log(err));
});

const form = document.querySelector('[data-form4]');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const logOut = document.querySelector('[data-logOut]');

    clientServices
    .eliminarClientes(logOut)
    .then(() => {
        window.location.href = "./index";
    })
    .catch((err) => console.log(err));
});


