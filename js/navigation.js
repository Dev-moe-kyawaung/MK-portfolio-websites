// Navigation Functions

// Mobile menu toggle
const initMobileMenu = () => {
    const menuToggle = getElement('.menu-toggle');
    const navLinks = getElement('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            toggleClass(navLinks, 'active');
            toggleClass(menuToggle, 'active');
        });

        // Close menu when link is clicked
        getElements('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                removeClass(navLinks, 'active');
                removeClass(menuToggle, 'active');
            });
        });
    }
};

// Smooth scroll for navigation links
const initSmoothScroll = () => {
    getElements('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = getElement(targetId);
            
            if (target) {
                smoothScroll(target);
            }
        });
    });
};

// Active nav link on scroll
const initActiveNavLink = () => {
    const navLinks = getElements('.nav-links a');
    const sections = getElements('section[id]');

    const makeLinksInactive = () => {
        navLinks.forEach(link => removeClass(link, 'active'));
    };

    const updateActiveLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        makeLinksInactive();
        const activeLink = getElement(`.nav-links a[href="#${current}"]`);
        if (activeLink) {
            addClass(activeLink, 'active');
        }
    };

    window.addEventListener('scroll', throttle(updateActiveLink, 100));
};

// Navbar background on scroll
const initNavbarScroll = () => {
    window.addEventListener('scroll', () => {
        const navbar = getElement('.navbar');
        if (window.scrollY > 50) {
            addClass(navbar, 'scrolled');
        } else {
            removeClass(navbar, 'scrolled');
        }
    });
};

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initActiveNavLink();
    initNavbarScroll();
});
