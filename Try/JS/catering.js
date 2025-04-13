document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    function toggleHeaderOnScroll() {
        if (window.scrollY > 50) { // Adjust threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleHeaderOnScroll);
});
// Select all section links and sections
const links = document.querySelectorAll('.section-link');
const sections = document.querySelectorAll('.section');


// Attach the scroll event listener to the window
window.addEventListener('scroll', toggleHeaderOnScroll);
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Update the slide index
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the new slide
    slides[currentSlide].style.opacity = 0.5;
}

// Change slide every 5 seconds
setInterval(showNextSlide, 3000);