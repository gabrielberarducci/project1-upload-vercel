// Loading effect
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    this.setTimeout(() => {
      // con esto ocultamos la ventana de loading luego de 500ms
      // esto permite que se muestre momentaneamente el efecto de loading por mas que la pagina cargue demasiado rapido.
      loading.style.display = 'none'; 
    }, 500);
  });