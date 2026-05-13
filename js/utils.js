// Utility Functions

// Get element safely
const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

// Add event listener
const addEventListener = (element, event, callback) => {
    if (element) {
        element.addEventListener(event, callback);
    }
};

// Toggle class
const toggleClass = (element, className) => {
    if (element) {
        element.classList.toggle(className);
    }
};

// Add class
const addClass = (element, className) => {
    if (element) {
        element.classList.add(className);
    }
};

// Remove class
const removeClass = (element, className) => {
    if (element) {
        element.classList.remove(className);
    }
};

// Check if element has class
const hasClass = (element, className) => {
    return element ? element.classList.contains(className) : false;
};

// Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Throttle function
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Smooth scroll
const smoothScroll = (target) => {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// Animate number counter
const animateCounter = (element, target, duration = 1000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

// Local storage helpers
const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

const removeStorage = (key) => {
    localStorage.removeItem(key);
};

// Fetch with error handling
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};
