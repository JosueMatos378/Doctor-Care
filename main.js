window.addEventListener('scroll', onScroll);
onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home)
  // activateMenuAtCurrentSection(services)
}
function activateMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2
  // Verificar se a seção passou da linha!
  // Quais dados vou precisar?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionHeight

  // Informações dos dados e da lógica!
  // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  // Verificar se a base está abaixo da linnha alvo!
  // Quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight

  // O final da seção passou da linha alvo!
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  
  console.log('O fundo da seção passou da linha?', sectionTopReachOrPassedTargetLine)

  // Limites da seção!
  const sectionBoundaries  = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  if(sectionBoundaries) {
  console.log('Estou na seção HOME')
  }
}
function showNavOnScroll() {
  let element = document.getElementById('navigation');

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