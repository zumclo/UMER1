document.addEventListener("DOMContentLoaded", function () {
    // Select all elements matching our scroll target class
    const dynamicCards = document.querySelectorAll(".scroll-reveal");

    // Configure tracking behaviors
    const viewOptions = {
        root: null, // evaluates items against global browser frame window
        threshold: 0.1, // executes immediately when 10% of element clears edge border line
        rootMargin: "0px 0px -40px 0px" // bottom offset frame buffer prevents immediate flash triggers
    };

    const elementObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Injects the active visibility class defining execution criteria
                entry.target.classList.add("visible");
                // Clears watcher cycle loop to process animation engine once
                observer.unobserve(entry.target);
            }
        });
    }, viewOptions);

    // Apply viewport checking pipeline loop across target nodes array
    dynamicCards.forEach(card => {
        elementObserver.observe(card);
    });
});