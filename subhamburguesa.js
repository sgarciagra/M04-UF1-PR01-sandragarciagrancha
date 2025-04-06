// Para el submenu (menu del resto de paginas)
const hamburger = document.getElementById('subhamburger');
const submenu = document.querySelector('.submenu');

hamburger.addEventListener('click', () => {
  submenu.classList.toggle('active');
});