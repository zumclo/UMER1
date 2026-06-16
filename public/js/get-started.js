document.addEventListener("DOMContentLoaded", function () {
    // Target all timeline items and the contact form section
    const animatedElements = document.querySelectorAll('.timeline-item, .form-section');

    // Automatically inject the base animation class when the page loads
    animatedElements.forEach(element => {
        element.classList.add('scroll-reveal');
    });

    // Setup the Intersection Observer configuration
    const observerOptions = {
        root: null, // Defaults to the browser viewport
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element enters the screen
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the CSS class that matches your style sheet (.visible)
                entry.target.classList.add('visible');
                // Stop observing the element once it has animated into view
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Bind observer to each target element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});