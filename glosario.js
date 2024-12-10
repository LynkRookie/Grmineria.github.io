document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleView');
    const basicoContent = document.getElementById('basico');
    const avanzadoContent = document.getElementById('avanzado');

    toggleButton.addEventListener('click', function() {
        basicoContent.classList.toggle('active');
        avanzadoContent.classList.toggle('active');
        
        if (basicoContent.classList.contains('active')) {
            toggleButton.textContent = 'Interfaz profesional';
        } else {
            toggleButton.textContent = 'Interfaz básica';
        }
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});