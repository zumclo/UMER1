document.addEventListener("DOMContentLoaded", function () {
    
    // Part 1: Interactive Accordion Mechanism
    const faqButtons = document.querySelectorAll(".faq-toggle");

    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            const currentItem = this.parentElement;
            const arrow = this.querySelector(".arrow-icon");
            
            // Check if item is already active
            const isCurrentlyActive = currentItem.classList.contains("active");

            // Option: Collapse all other panels to keep a clean view structure
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
                const itemArrow = item.querySelector(".arrow-icon");
                if (itemArrow) {
                    itemArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
                }
            });

            // Toggle selected panel's state
            if (!isCurrentlyActive) {
                currentItem.classList.add("active");
                arrow.classList.replace("fa-chevron-down", "fa-chevron-up");
            } else {
                currentItem.classList.remove("active");
                arrow.classList.replace("fa-chevron-up", "fa-chevron-down");
            }
        });
    });


    // Part 2: Lightweight Scroll Reveal Animation setup
    const animateTargets = document.querySelectorAll(".scroll-reveal");

    const scrollOptions = {
        root: null, // evaluates targets against device screen boundaries
        threshold: 0.1, // starts rendering logic once 10% target is visible
        rootMargin: "0px 0px -20px 0px"
    };

    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // layout logic locks layout in place
            }
        });
    }, scrollOptions);

    animateTargets.forEach(target => {
        sectionObserver.observe(target);
    });
});