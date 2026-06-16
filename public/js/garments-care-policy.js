document.addEventListener("DOMContentLoaded", function () {
    
    // --- Smooth Scroll Anchor Action ---
    const scrollTrigger = document.getElementById("txScrollTrigger");
    const policySection = document.getElementById("txPolicySection");

    if (scrollTrigger && policySection) {
        scrollTrigger.addEventListener("click", function () {
            policySection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // --- Cascade Scroll Timeline Entry Animation ---
    const timelinePoints = document.querySelectorAll(".tx-guideline-point");

    const scrollObserverOptions = {
        root: null,
        rootMargin: "0px 0px -60px 0px", // Trigger point offset ahead of entering actual screen space
        threshold: 0.05
    };

    const entryAnimationObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Determine item placement to create natural cascading timing blocks
                const targetElement = entry.target;
                const parentBlock = targetElement.closest('.tx-timeline-segment');
                const relativePoints = Array.from(parentBlock.querySelectorAll('.tx-guideline-point'));
                const elementIndex = relativePoints.indexOf(targetElement);

                // Creates beautiful, rhythmic delay spacing on scroll down
                setTimeout(() => {
                    targetElement.classList.add("tx-revealed");
                }, elementIndex * 90);

                // Unbind item from observer tracking stack to protect performance
                observer.unobserve(targetElement);
            }
        });
    }, scrollObserverOptions);

    // Initialise tracking across element array hooks
    timelinePoints.forEach(point => {
        entryAnimationObserver.observe(point);
    });
});