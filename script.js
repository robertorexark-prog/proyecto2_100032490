// 1. Seleccionamos el botón y el cuerpo de la página
const botonOscuro = document.getElementById('btn-oscuro');
const cuerpoPagina = document.body;

// 2. Le agregamos el evento de clic al botón
botonOscuro.addEventListener('click', function() {
    // toggle() agrega la clase si no la tiene, y se la quita si ya la tiene
    cuerpoPagina.classList.toggle('modo-oscuro');
    
    // Cambiamos el texto del botón dependiendo del estado
    if (cuerpoPagina.classList.contains('modo-oscuro')) {
        botonOscuro.textContent = 'Desactivar Modo Oscuro';
    } else {
        botonOscuro.textContent = 'Activar Modo Oscuro';
    }
});