document.addEventListener("DOMContentLoaded", function () {
    
    // Select all sections configured with the class 'reveal'
    const revealElements = document.querySelectorAll(".reveal");

    // Options configuration for Scroll Intersection Target
    const observerOptions = {
        root: null, // target viewport context
        threshold: 0.15, // trigger execution when 15% of component is on screen
        rootMargin: "0px 0px -50px 0px" // early fire adjustment window boundaries
    };

    const scrollObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to activate CSS Transition rules
                entry.target.classList.add("active");
                // Stop observing once element enters display viewport context
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Bind configured elements to Observer cycle loop
    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });
});