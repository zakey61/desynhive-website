document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from submitting normally

            // In a real site, you would send this data to a server here (using fetch() or XMLHttpRequest)

            // Basic success feedback for the user
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clear the form fields
        });
    }
});