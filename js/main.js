// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector('textarea').value;
    
    // You can add form submission logic here
    console.log({name, email, subject, message});
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--box-shadow)';
    }
});

// Count animation for stats
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const finalNumber = statNumber.textContent;
            animateNumber(statNumber, finalNumber);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

function animateNumber(element, finalNumber) {
    let currentNumber = 0;
    const increment = parseInt(finalNumber) / 30;
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= parseInt(finalNumber)) {
            element.textContent = finalNumber;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentNumber) + '+';
        }
    }, 50);
}
