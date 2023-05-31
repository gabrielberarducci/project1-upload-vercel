/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */



// Loading effect
window.addEventListener('load', function() {
  const loading = document.querySelector('.loading');
  this.setTimeout(() => {
    loading.style.display = 'none';    
  }, 500);

});





// Scroll to TOP section
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}





  
// create the articles for the Projects sections 
getPosts().then((data) => {
  let projectsTabsParent = document.querySelector(".articles-container");
  newRandomChild(projectsTabsParent,data,1);
  newRandomChild(projectsTabsParent,data,2);
  newRandomChild(projectsTabsParent,data,3);
})






//function carousel

const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = Array.from(carouselInner.querySelectorAll('.carousel-item'));

const itemWidth = carouselItems[0].offsetWidth; // Ancho de cada elemento del carrusel
const numVisibleItems = 3; // Número de elementos visibles a la vez

let currentIndex = 0;
const intervalTime = 1000; // Intervalo de tiempo en milisegundos
let slideInterval;

function startSlide() {
  slideInterval = setInterval(() => {
    moveToNextSlide();
  }, intervalTime);
}

function moveToNextSlide() {
  currentIndex++;

  if (currentIndex >= carouselItems.length - numVisibleItems + 1) {
    currentIndex = 0;
    carouselInner.style.transition = 'none';
  } else {
    carouselInner.style.transition = 'transform 3s ease';
  }

  carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function stopSlide() {
  clearInterval(slideInterval);
}

carousel.addEventListener('mouseenter', stopSlide);
carousel.addEventListener('mouseleave', startSlide);

startSlide();
