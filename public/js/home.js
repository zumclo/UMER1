// last portion
document.addEventListener("DOMContentLoaded", () => {
  // Capture all elements needing scroll animations
  const targetElements = document.querySelectorAll(".anim-left, .anim-right, .anim-up");

  // Options settings for the IntersectionObserver instance
  const observerOptions = {
    root: null, // Viewport tracking base frame
    rootMargin: "0px",
    threshold: 0.12 // Trigger transition when 12% of card enters the visual frame
  };

  // Callback logic when viewport tracking intersections change
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply the animation activation class 
        entry.target.classList.add("reveal-active");
        
        // Stop tracking this element since it has animated into view
        observer.unobserve(entry.target);
      }
    });
  };

  // Instantiate the animation intersection controller 
  const elementObserver = new IntersectionObserver(observerCallback, observerOptions);

  // Bind observer loops directly across your target array nodes
  targetElements.forEach(element => {
    elementObserver.observe(element);
  });
});
// uppersection
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  
  let currentSlide = 0;
  let slideInterval;
  
  // Set intervals to 1 minute (60,000 milliseconds)
  const intervalTime = 60000; 

  // Function to change display states of slides and indicators
  function changeSlide(index) {
    // Remove active class from prior elements
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    // Update index pointer
    currentSlide = index;

    // Add active class to new targeting index
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Handle forward cycling automatically
  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex);
  }

  // Initialize/Reset timer loop 
  function startSliderTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Bind click listeners directly to pagination dots
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const targetIndex = parseInt(e.target.getAttribute("data-slide"), 10);
      
      // Execute change only if selecting a different slide
      if (targetIndex !== currentSlide) {
        changeSlide(targetIndex);
        startSliderTimer(); // Restart clock cycle to prevent sudden immediate jumps
      }
    });
  });

  // Start rotation cycle on initial render
  startSliderTimer();
});
// last section
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("testimonialTrack");
  const dotsContainer = document.getElementById("carouselDots");
  const dots = Array.from(dotsContainer.children);

  let currentSlideIndex = 0;

  // Render sliding movement translation logic changes
  const updateSlidePosition = (targetIndex) => {
    currentSlideIndex = targetIndex;

    // Shift track container sideways via precise negative width transforms
    const moveOffsetAmount = currentSlideIndex * -100;
    track.style.transform = `translateX(${moveOffsetAmount}%)`;

    // Swap active styles on tracking dot components smoothly
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlideIndex].classList.add("active");
  };

  // Bind click activation listeners to dot indicator wrappers
  dotsContainer.addEventListener("click", (event) => {
    const clickedDot = event.target.closest(".navigation-dot");
    if (!clickedDot) return; // Ignores empty click interactions inside the parent container spacing

    const indexSelection = parseInt(clickedDot.getAttribute("data-index"), 10);
    updateSlidePosition(indexSelection);
  });

  // Maintain current index positioning smoothly if window resizing occurs
  window.addEventListener("resize", () => {
    updateSlidePosition(currentSlideIndex);
  });
});