/* Esta funcion permite que a partir de los 300px desde el top de la pagina, aparezca un boton en la parte
inferior de la misma.
Este boton permite regresar al inicio de la pagina con solo oprimirlo, evitando asi que el usuario 
deba hacer todo el scroll de vuelta hacia arriba.  */

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block"; //muestra el boton a partir de 300px. 
    } else {
      scrollToTopBtn.style.display = "none"; // el boton permanece escondido por encima de los 300px.
    }
  }
  
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth' //permite un movimiento suave cuando se oprime el boton. 
    });
  }

window.onscroll = function() {
    scrollFunction(); 
  };