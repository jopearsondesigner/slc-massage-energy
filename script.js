window.onload = () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const dotsNav = document.querySelector(".carousel-nav");
  const dots = Array.from(dotsNav.children);

  // Function to calculate slide width
  const calculateSlideWidth = () => {
    return slides[0].getBoundingClientRect().width;
  };

  let slideWidth = calculateSlideWidth();
  console.log("Initial Slide Width:", slideWidth);

  // Arrange the slides next to one another
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
    console.log(`Slide ${index} position:`, slide.style.left);
  };

  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    if (!targetSlide) return; // Prevent null reference error
    console.log("Moving to slide:", targetSlide);
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const updateDots = (currentDot, targetDot) => {
    if (!targetDot) return; // Prevent null reference error
    console.log("Updating dots:", targetDot);
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    console.log("Hiding/Showing arrows for index:", targetIndex);
    if (targetIndex === 0) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  };

  // Click left, move slides to the left
  prevButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot ? currentDot.previousElementSibling : null;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);

    console.log("Previous Button Clicked");
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  });

  // Click right, move slides to the right
  nextButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot ? currentDot.nextElementSibling : null;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    console.log("Next Button Clicked");
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  });

  // Click the nav indicators, move to that slide
  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    console.log("Dot Clicked:", targetDot);
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    slideWidth = calculateSlideWidth();
    slides.forEach(setSlidePosition);
  });
};

// Toggle Menu
function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".menu-overlay");
  const menuToggle = document.querySelector(".menu-toggle");

  menu.classList.toggle("right-0");
  menu.classList.toggle("right-[-100%]");
  overlay.classList.toggle("hidden");
  menuToggle.classList.toggle("active");
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "images/sun-icon.svg";
  } else {
    themeIcon.src = "images/moon-icon.svg";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark-mode");
  document.getElementById("theme-icon").src = "images/sun-icon.svg";
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.getElementById("close-lightbox");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector(".gallery-image").src;
      lightboxImg.src = imgSrc;
      lightbox.style.display = "flex";
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg && e.target !== closeLightbox) {
      lightbox.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".benefit-item").forEach((group) => {
    const icon = group.querySelector(".benefit-icon");
    const text = group.querySelector("p");

    const addAnimations = () => {
      icon.classList.add("animate-blowUpIcon", "animate-realisticBounce");
      text.classList.add("animate-blowUpText");
    };

    const removeAnimations = () => {
      icon.classList.remove("animate-blowUpIcon", "animate-realisticBounce");
      text.classList.remove("animate-blowUpText");
    };

    group.addEventListener("mouseover", addAnimations);
    group.addEventListener("mouseleave", removeAnimations);

    // For mobile touch events
    group.addEventListener("touchstart", addAnimations);
    group.addEventListener("touchend", removeAnimations);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const colors = ["#007ACC", "#FF4500", "#50C878"];
  const items = document.querySelectorAll(".benefit-item");

  items.forEach((item) => {
    const icon = item.querySelector(".benefit-icon");
    const texts = item.querySelectorAll(".benefit-text");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (icon) {
      icon.style.color = randomColor;
    }

    texts.forEach((text) => {
      text.style.color = randomColor;
    });
  });
});

const particleOneConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  retina_detect: true,
};

const particleTwoConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

let currentConfig = particleOneConfig;
let currentParticle = "One";

function initializeParticles() {
  particlesJS("particles-js", currentConfig);
}

document
  .getElementById("toggle-particles")
  .addEventListener("click", function () {
    currentConfig =
      currentConfig === particleOneConfig
        ? particleTwoConfig
        : particleOneConfig;
    currentParticle = currentParticle === "One" ? "Two" : "One";
    particlesJS("particles-js", currentConfig);
    document.getElementById(
      "toggle-particles"
    ).innerText = `Interactive Particle Pattern ${currentParticle}`;
  });

document.addEventListener("DOMContentLoaded", function () {
  // Hide the splash screen after the page has loaded
  window.addEventListener("load", function () {
    setTimeout(() => {
      const splashScreen = document.getElementById("splash-screen");
      splashScreen.style.opacity = 0;
      setTimeout(() => {
        splashScreen.style.display = "none";
        document.body.classList.remove("loading");
        // Initialize particles after splash screen is hidden
        initializeParticles();
      }, 500); // Duration must match the CSS transition duration
    }, 100); // Add a small delay to ensure the splash screen is fully rendered
  });
});

// Update particle position based on touch/mouse movement
function updateParticles(e) {
  let posX, posY;
  if (e.type === "mousemove") {
    posX = e.clientX;
    posY = e.clientY;
  } else if (e.type === "touchmove") {
    posX = e.touches[0].clientX;
    posY = e.touches[0].clientY;
  }

  particlesJS.particles.interactivity.mouse.pos_x = posX;
  particlesJS.particles.interactivity.mouse.pos_y = posY;
}

// Add event listeners for touch and mouse movements
document
  .getElementById("particles-js")
  .addEventListener("mousemove", updateParticles);
document
  .getElementById("particles-js")
  .addEventListener("touchmove", updateParticles);
