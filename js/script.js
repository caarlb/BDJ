// script.js
const confirmButton = document.getElementById('confirmButton');
if (confirmButton) {
    confirmButton.addEventListener('click', () => {
        alert('¡Gracias por confirmar tu asistencia!');
        // Agrega más acciones aquí si lo deseas
    });
} else {
    console.error('El botón confirmButton no se encontró en el DOM.');
}


const miMusica = document.getElementById('miMusica');
const botonMusica = document.getElementById('botonMusica');

botonMusica.addEventListener('click', () => {
    if (miMusica.paused) {
        miMusica.play();
        botonMusica.textContent = '||';
    } else {
        miMusica.pause();
        botonMusica.textContent = '▶';
    }
});

