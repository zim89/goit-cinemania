const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('scroll-lock');
};

const checkForBackdropClick = e => {
  if (e.target.classList.contains('js-menu-container')) {
    toggleMenu();
  }
};

openMenuBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', checkForBackdropClick);
