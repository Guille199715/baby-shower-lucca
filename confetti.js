document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = `${Math.random() * 2}s`; // Añadimos un delay para una entrada más suave
        confetti.style.animationDuration = `${Math.random() * 3 + 3}s`; // Hacemos la duración más larga
        confetti.style.width = `${Math.random() * 5 + 5}px`; // Tamaño más pequeño
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = `hsl(${Math.random() * 30 + 180}, 100%, 50%)`; // Gama de colores celestes
        confettiContainer.appendChild(confetti);
    }
});
