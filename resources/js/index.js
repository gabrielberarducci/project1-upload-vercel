// create the articles for the Projects sections 
getPosts().then((data) => { //hago una llamada a la funcion getPost que vive en el archivo projects.js, esta funcion devuelve un.json con los post en crudo. 
  let projectsTabsParent = document.querySelector(".articles-container");
  //Con la funcion newRandomChild que vive en project.js inserto la informacion que deseo en mi HTML.
  //En este caso usamos una variacion de la funcion, al pasarle un tercer parametro opcional "id", le indico especificamente el numero de post deseo insertar.
  //de esta manera, logramos que en el home siempre se muestren los mismos 3 proyectos. 
  newRandomChild(projectsTabsParent,data,1);
  newRandomChild(projectsTabsParent,data,2);
  newRandomChild(projectsTabsParent,data,3);
})