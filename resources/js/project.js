/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */


async function getPosts() {
    return await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (response.ok)
                return response.json();
            else
                throw Error("Failed to get Posts data");
        })
        .catch((error) => {
            console.log(error.message);
        });
}

function newRandomChild(parent, data, id = 0){ //el parametro id es opcional, si no se incluye en la llamada, toma el valor "0" y no es tenido en cuenta al momento de ejecucion. 
    let newChild = document.createElement("div");
    newChild.className = "post";
    newChild = document.createElement("div");
    let i = Math.floor(Math.random() * 100);
    if(id > 0) i=id-1; //permite de forma opcional elegir el articulo segun su ID. Si el valor id = "0", toma un valor random.
    newChild.innerHTML = `
    <div class="article" id="${data[i].id}">    
    <img class="project-img" src="/resources/images/projects-section/${(i % 6) + 1}.jpg" alt="Project-image">
        <h2>${data[i].title}</h2>
        <p>${data[i].body}</p>
        <a rel="stylesheet" href="/project.html?id=${data[i].id}">Learn More</a>
    </div> 
    `;
    parent.appendChild(newChild);
}

function newChildById(parent, data){
    // Obtener la URL actual
    var url = new URL(window.location.href);
    // Obtener el valor de un parámetro específico, en este caso "id"
    var id = url.searchParams.get('id');
    // creamos un nuevo elemento. 
    let newChild = document.createElement("div");
    // obtenemos la fecha de hoy para mostrarla en la pagina. 
    const todayDate = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = todayDate.toLocaleDateString('en-US', options);

    newChild.className = "post";
    newChild = document.createElement("div");
    newChild.innerHTML = `
    <div id="${data[id-1].id}" class="mainArticle">    
        <h2>${data[id-1].title}</h2>
        <div class="subtitle">
            <p class="articleSubtitle">${data[id-1].title}</p>
            <p class="date">Completed on ${formattedDate}</p>
        </div>
        <img src="/resources/images/projects-section/${((id-1) % 6) + 1}.jpg"
        <p>${data[id-1].body}</p>
    </div> 
    `;
    // Insertamos el nuevo elemento HTML en la pagina con la informacion obtenida. 
    parent.appendChild(newChild);
}

getPosts().then((data) => { //Al ejecutar esta funcion, creamos todo el contenido necesario para la pagina de projects.html
    let projectsTabsParent = document.querySelector(".articles-container");
    let mainProjectParent = document.querySelector("#mainProject");
    var url = new URL(window.location.href);
    var id = url.searchParams.get('id');
    if (id === null) return null; // de esta manera la funcion continua solo si estamos en project.html y no en index.html. 
    newChildById(mainProjectParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
})