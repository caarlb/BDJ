/* // script.js
const confirmButton = document.getElementById('confirmButton');
if (confirmButton) {
    confirmButton.addEventListener('click', () => {
       // alert('¡Gracias por confirmar tu asistencia!');
        // Agrega más acciones aquí si lo deseas
    });
} else {
    //console.error('El botón confirmButton no se encontró en el DOM.');
}
 */

//configura el reproductor de musica
const miMusica = document.getElementById('miMusica');
const botonMusica = document.getElementById('botonMusica');

botonMusica.addEventListener('click', () => {
    if (miMusica.paused) {
        miMusica.play();
        botonMusica.textContent = 'pausar reproduccion ||';
    } else {
        miMusica.pause();
        botonMusica.textContent = 'Escucha nuestra canción ▶';
    }
}); 


/*  // Configura el reproductor de música
 const miMusica = document.getElementById('miMusica');
 const botonMusica = document.getElementById('botonMusica');

 // Intenta reproducir la música al cargar la página
 document.addEventListener('DOMContentLoaded', () => {
     miMusica.play().catch(error => {
         // En caso de que la reproducción sea bloqueada, podemos mostrar un mensaje o simplemente esperar la interacción del usuario
         console.log('La reproducción automática fue bloqueada:', error);
     });
 });

 botonMusica.addEventListener('click', () => {
     if (miMusica.paused) {
         miMusica.play();
         botonMusica.textContent = '||';
     } else {
         miMusica.pause();
         botonMusica.textContent = '▶';
     }
 }); */




// Configura la fecha objetivo (por ejemplo, una fecha de boda)
const targetDate = new Date("2024-11-30T10:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);


