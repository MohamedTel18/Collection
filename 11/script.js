// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const body = document.body;

    // Function to open mobile menu
    function openMobileMenu() {
        mobileMenuOverlay.classList.add('active');
        hamburgerMenu.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        body.style.overflow = 'auto'; // Restore scrolling
    }

    // Event listeners
    hamburgerMenu.addEventListener('click', openMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on menu links (mobile)
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside the menu content
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
