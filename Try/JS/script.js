document.getElementById('order-now').addEventListener('click', function() {
    alert('Redirecting to the order page...');
    // You can add redirection to an order page or open a modal here
    window.location.href = "#";
});
// Select the header element
const header = document.querySelector('header');

// Function to toggle the 'scrolled' class based on scroll position
function toggleHeaderOnScroll() {
    if (window.scrollY > 50) { // Change 50 to any scroll threshold you prefer
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

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


