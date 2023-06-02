/* Muestra una pantalla de carga al entra a cualquier pagina del sitio. 
Tiene configurado un retardo de apenas 500ms para que el efecto sea apreciable
por mas que la carga de la pagina muy demasiado rapida */

// Loading effect
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    this.setTimeout(() => {
      // con esto ocultamos la ventana de loading luego de 500ms
      // esto permite que se muestre momentaneamente el efecto de loading por mas que la pagina cargue demasiado rapido.
      loading.style.display = 'none'; 
    }, 500);
  });