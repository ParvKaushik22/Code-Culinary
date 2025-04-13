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

// Function to display only the target section and highlight active link
function showSection(targetSectionId) {
    // Hide all sections and remove 'active' and 'hidden' classes
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show the target section by adding 'active' class and removing 'hidden'
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.remove('hidden');
    }

    // Remove 'active-link' class from all links and apply it to the clicked link
    links.forEach(link => link.classList.remove('active-link'));
    document.querySelector(`[data-target="${targetSectionId}"]`).classList.add('active-link');
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


