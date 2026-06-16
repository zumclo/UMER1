document.addEventListener("DOMContentLoaded", function () {
    // Select all our timeline block entries
    const timelineItems = document.querySelectorAll(".animate-on-scroll");

    // Options for the Intersection Observer
    const observerOptions = {
        root: null,          // Uses viewport boundaries
        rootMargin: "0px",
        threshold: 0.15      // Triggers animation when 15% of the element enters the screen
    };

    // Callback when elements cross the threshold visibility point
    const scrollCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to animate the node entry
                entry.target.classList.add("is-visible");
                // Stop observing once animated to retain static layout states
                observer.unobserve(entry.target);
            }
        });
    };

    // Initialize Native Intersection Observer
    const timelineObserver = new IntersectionObserver(scrollCallback, observerOptions);

    // Apply observer monitoring to each element block
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});