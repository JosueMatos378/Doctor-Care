window.addEventListener('scroll', onScroll);
onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}
function showNavOnScroll() {
  var element = document.getElementById('navigation');

  if (scrollY > 0) {
    element.classList.add('scroll');
  } else {
    element.classList.remove('scroll');
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded');
}
function closeMenu() {
  document.body.classList.remove('menu-expanded');
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .cards,
  #about header,
  #about .content
`);
