// Obtener el botón de hamburguesa y el contenedor del menú (de pagina principal)
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.topbar nav');

// Añadir un event listener para el clic
hamburger.addEventListener('click', () => {
    // Alternar la clase 'active' en el nav
    nav.classList.toggle('active');
});

