const button = document.getElementById('btn-scroll');
window.addEventListener('scroll', displayButton);

function displayButton() {
  if (document.documentElement.scrollTop > 0) {
    button.style.display = 'block';
    button.addEventListener('click', scrollToTop);
  } else {
    button.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  button.removeEventListener('scroll', scrollToTop);
}
