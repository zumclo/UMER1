document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. HERO CONTROLLER ACTION ---
    const scrollTrigger = document.getElementById("txScrollTrigger");
    const firstSection = document.getElementById("fpProcessSection");

    if (scrollTrigger && firstSection) {
        scrollTrigger.addEventListener("click", function () {
            firstSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // --- 2. CONFIGURING GLOBAL OVERRIDES OBSERVER ---
    const scrollObserverOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px", // Trigger slightly ahead of passing viewport line
        threshold: 0.05
    };

    // A. Our Process Trigger Activation
    const processItems = document.querySelectorAll(".fp-step-item");
    const processObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fp-visible");
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    processItems.forEach(item => processObserver.observe(item));

    // B. Quality Guarantee Grid staggered loader loop
    const guaranteeCards = document.querySelectorAll(".qg-matrix-card");
    const guaranteeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("qg-visible");
                }, idx * 60);
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    guaranteeCards.forEach(card => guaranteeObserver.observe(card));

    // C. Care Timeline Segment multi-cascading dynamic engine
    const timelinePoints = document.querySelectorAll(".tx-guideline-point");
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNode = entry.target;
                const segmentGroup = targetNode.closest('.tx-timeline-segment');
                const pointCollection = Array.from(segmentGroup.querySelectorAll('.tx-guideline-point'));
                const listPlacementIndex = pointCollection.indexOf(targetNode);

                setTimeout(() => {
                    targetNode.classList.add("tx-revealed");
                }, listPlacementIndex * 70);

                observer.unobserve(targetNode);
            }
        });
    }, scrollObserverOptions);

    timelinePoints.forEach(point => timelineObserver.observe(point));
});