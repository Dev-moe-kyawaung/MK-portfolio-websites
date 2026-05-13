// Animation Effects

// Intersection Observer for animations
const initIntersectionObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addClass(entry.target, 'animate-in');
                
                // Animate counters for stat cards
                if (hasClass(entry.target, 'stat-card')) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber) {
                        const finalNumber = parseInt(statNumber.textContent);
                        animateCounter(statNumber, finalNumber);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    getElements('.certificate-card, .repo-card, .project-card, .app-card, .wordpress-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
};

// Parallax effect on scroll
const initParallax = () => {
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = getElements('[data-parallax]');
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax');
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 10));
};

// Hover animations for cards
const initCardHoverEffects = () => {
    const cards = getElements('.certificate-card, .repo-card, .project-card, .app-card, .wordpress-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            addClass(card, 'hovering');
        });

        card.addEventListener('mouseleave', () => {
            removeClass(card, 'hovering');
        });
    });
};

// Type animation for title
const typeAnimation = (element, text, speed = 50) => {
    let index = 0;
    element.textContent = '';

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };

    type();
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    initIntersectionObserver();
    initCardHoverEffects();
});

// Initialize parallax on window load
window.addEventListener('load', () => {
    initParallax();
});
