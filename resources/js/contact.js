const okMessage = document.getElementById("suceedMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener('submit', (event) => { // esperamos a que el usuario haga submit para ejecutar la funcion
    event.preventDefault();
    let dataForm = {
        //obtenemos la informacion del formulario y la guardamos en una variable. 
        formName: document.getElementById("name").value,
        formEmail: document.getElementById("email").value,
        formPhone: document.getElementById("phone").value,
        formMessage: document.getElementById("message").value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', { //mediante un fetch a una api de prueba testeamos el correcto funcionamiento de nuestra app. 
        method: 'POST',
        body: JSON.stringify(dataForm), //convertimos nuestra info obtenida del form, a un doc tipo json el cual es el formato esperado por la API de prueba. 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => {
            if (response.ok === true) { //chequeamos que la respuesta de la API sea OK para seguir adelante. 
                okMessage.hidden = false; // mostramos por pantalla el mensaje que todo esta OK durante 4 seg. 
                setTimeout(() => okMessage.hidden = true, 4000);
                document.getElementById("form").reset(); //limpiamos el formulario. 
            } else {
                errorMessage.hidden = false; // mostramos un mensaje de error durante 4 seg. 
                setTimeout(() => errorMessage.hidden = true, 4000);
            }
            return response.json()})
    .then(data => console.log(data)) // mostramos por consola la info recibida de respuesta por parte de la API.
})