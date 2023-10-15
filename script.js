// script.js
const slides = document.querySelectorAll('.shoe-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(nextSlide, 3000);

document.getElementById('subscribe-button').addEventListener('click', () => {
    alert('Thank you for subscribing!');
});
