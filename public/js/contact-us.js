// Initialize ScrollReveal animations
document.addEventListener('DOMContentLoaded', () => {

    // Global configurations for ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        reset: false // Set to true if you want animations to re-trigger every time you scroll up/down
    });

    // Animate the main title heading
    sr.reveal('.contact-title', { 
        origin: 'top', 
        distance: '20px' 
    });

    // Animate the left-side info items coming from the left
    sr.reveal('.reveal-left', { 
        origin: 'left', 
        distance: '50px',
        duration: 1200 
    });

    // Animate the right-side form coming from the right
    sr.reveal('.reveal-right', { 
        origin: 'right', 
        distance: '50px',
        duration: 1200,
        delay: 400 
    });

    // Form Submission Handling (Optional UX enhancement)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple submission confirmation placeholder
        alert('Thank you! Your message has been submitted successfully.');
        form.reset();
    });
});