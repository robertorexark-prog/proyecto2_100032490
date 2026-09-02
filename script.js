
const botonOscuro = document.getElementById('btn-oscuro');
const cuerpoPagina = document.body;


botonOscuro.addEventListener('click', function() {

    cuerpoPagina.classList.toggle('modo-oscuro');
    

    if (cuerpoPagina.classList.contains('modo-oscuro')) {
        botonOscuro.textContent = 'Desactivar Modo Oscuro';
    } else {
        botonOscuro.textContent = 'Activar Modo Oscuro';
    }
});