// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;
    const closeHamburger = document.querySelector('.close-hamburger');

    // Function to open mobile menu
    function openMobileMenu() {
        mobileMenuOverlay.classList.add('active');
        hamburgerMenu.style.display = 'none'; // Hide hamburger icon
        closeHamburger.style.display = 'block'; // Show close icon
        body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        hamburgerMenu.style.display = 'block'; // Show hamburger icon
        closeHamburger.style.display = 'none'; // Hide close icon
        body.style.overflow = 'auto'; // Restore scrolling
    }


    
    // Event listeners
    hamburgerMenu.addEventListener('click', openMobileMenu);
    closeHamburger.addEventListener('click', closeMobileMenu);

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
