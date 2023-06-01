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
