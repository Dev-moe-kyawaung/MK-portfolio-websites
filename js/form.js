// Form Handling Functions

// Contact form submission
const initContactForm = () => {
    const contactForm = getElement('#contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                subject: contactForm.querySelectorAll('input[type="text"]')[1].value,
                message: contactForm.querySelector('textarea').value
            };

            // Validate form
            if (!validateForm(formData)) {
                showNotification('Please fill all fields correctly', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                // Send email via EmailJS or your backend
                const response = await sendEmail(formData);
                
                if (response.success) {
                    showNotification('Message sent successfully!', 'success');
                    contactForm.reset();
                } else {
                    showNotification('Failed to send message. Please try again.', 'error');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                showNotification('An error occurred. Please try again later.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
};

// Validate form data
const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return data.name.trim() !== '' &&
           emailRegex.test(data.email) &&
           data.subject.trim() !== '' &&
           data.message.trim() !== '';
};

// Send email function (using EmailJS)
const sendEmail = async (data) => {
    // Note: You need to set up EmailJS service
    // Get your Service ID, Template ID from https://www.emailjs.com/
    
    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_id: 'your_service_id',
                template_id: 'your_template_id',
                user_id: 'your_user_id',
                template_params: {
                    to_email: 'your_email@example.com',
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message
                }
            })
        });

        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Show notification
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => addClass(notification, 'show'), 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        removeClass(notification, 'show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
};

// Add notification styles
const addNotificationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 9999;
            animation: slideIn 0.3s ease-in-out;
            opacity: 0;
            transform: translateX(400px);
            transition: all 0.3s ease;
        }

        .notification.show {
            opacity: 1;
            transform: translateX(0);
        }

        .notification-success {
            background: linear-gradient(135deg, #27ae60, #2ecc71);
        }

        .notification-error {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
        }

        .notification-info {
            background: linear-gradient(135deg, #3498db, #2980b9);
        }

        @media (max-width: 480px) {
            .notification {
                right: 10px;
                left: 10px;
                transform: translateY(-100px);
            }

            .notification.show {
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
};

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    addNotificationStyles();
    initContactForm();
});
