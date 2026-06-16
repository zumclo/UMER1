document.addEventListener("DOMContentLoaded", function() {
    
    // Select elements using unique IDs
    const discoverBtn = document.getElementById("hrJsDiscoverBtn");
    const scrollIndicator = document.getElementById("hrJsScrollIndicator");
    const nextSection = document.getElementById("hrNextSection");

    // Smooth scroll function
    function scrollToNextSection() {
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Attach click events
    if (discoverBtn) {
        discoverBtn.addEventListener("click", scrollToNextSection);
    }

    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", scrollToNextSection);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const processItems = document.querySelectorAll(".fp-step-item");

    // Setting up the scroll observer options
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Triggers once 15% of the item is within viewport
    };

    const processObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply visual state class
                entry.target.classList.add("fp-visible");
                // Stop observing once animation has executed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Bind each process step block to our observer
    processItems.forEach(item => {
        processObserver.observe(item);
    });
});