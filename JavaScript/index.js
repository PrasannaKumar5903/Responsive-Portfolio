// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobileMenuIcon.classList.toggle('fa-times');
});

// Close menu when a link is clicked (for better UX)
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            mobileMenuIcon.classList.remove('fa-times');
        }
    });
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});
