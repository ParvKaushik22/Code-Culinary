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

// Get all section links and sections
const links = document.querySelectorAll('.section-link');
const sections = document.querySelectorAll('.section');

// Function to show the target section
function showSection(targetSectionId) {
    // Remove the active class from all sections
    sections.forEach(section => section.classList.remove('active'));

    // Add the active class to the target section
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Set initial active section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('section1'); // Display Section 1 by default
});

// Add click event listeners to each link
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetSectionId = event.target.getAttribute('data-target'); // Get target section ID
        showSection(targetSectionId); // Show only the clicked section
    });
});

