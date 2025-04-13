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