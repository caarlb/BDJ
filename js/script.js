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