/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */


function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if(response.ok)    
            return response.json()
        else
            throw Error("Failed to get Posts data");
    })
    .catch((error) => {
        console.log(error.message);
    })
}

function newRandomChild(parent, data, id = 0){ //el parametro id es opcional- 
    let newChild = document.createElement("div");
    newChild.className = "post";
    newChild = document.createElement("div");
    let i = Math.floor(Math.random() * 100);
    if(id > 0) i=id-1; //permite de forma opcional elegir el articulo segun su ID. si no lo hace random.
    newChild.innerHTML = `
    <div class="article" id="${data[i].id}">    
    <img class="project-img" src="/Projects/Project1/resources/images/projects-section/${(i % 6) + 1}.jpg" alt="Project-image">
        <h2>${data[i].title}</h2>
        <p>${data[i].body}</p>
        <a rel="stylesheet" href="http://127.0.0.1:5500/Projects/Project1/project.html?id=${data[i].id}">Learn More</a>
    </div> 
    `;
    parent.appendChild(newChild);
}

function newChildById(parent, data){
    // Obtener la URL actual
    var url = new URL(window.location.href);
    // Obtener el valor de un parámetro específico
    var id = url.searchParams.get('id');
    let newChild = document.createElement("div");
    const todayDate = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = todayDate.toLocaleDateString('en-US', options);

    newChild.className = "post";
    newChild = document.createElement("div");
    newChild.innerHTML = `
    <div id="${data[id-1].id}">    
        <h2>${data[id-1].title}</h2>
        <div class="subtitle">
            <p class="articleSubtitle">${data[id-1].title}</p>
            <p class="date">Completed on ${formattedDate}</p>
        </div>
        <img src="/Projects/Project1/resources/images/projects-section/${((id-1) % 6) + 1}.jpg"
        <p>${data[id-1].body}</p>
    </div> 
    `;
    parent.appendChild(newChild);
}

getPosts().then((data) => {
    let projectsTabsParent = document.querySelector(".articles-container");
    let mainProjectParent = document.querySelector("#mainProject");
    newChildById(mainProjectParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
})