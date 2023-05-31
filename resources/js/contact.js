/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

const okMessage = document.getElementById("suceedMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let dataForm = {
        formName: document.getElementById("name").value,
        formEmail: document.getElementById("email").value,
        formPhone: document.getElementById("phone").value,
        formMessage: document.getElementById("message").value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => {
            if (response.ok === true) {
                okMessage.hidden = false;
                setTimeout(() => okMessage.hidden = true, 4000);
                document.getElementById("form").reset();
            } else {
                errorMessage.hidden = false;
                setTimeout(() => errorMessage.hidden = true, 4000);
            }
            return response.json()})
    .then(data => console.log(data))
})