document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  // Hide the splash screen after the page has loaded
  window.addEventListener("load", function () {
    console.log("Window load event fired");
    setTimeout(() => {
      const splashScreen = document.getElementById("splash-screen");
      if (splashScreen) {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
          splashScreen.style.display = "none";
          document.body.classList.remove("loading");
          console.log("Splash screen hidden, loading class removed from body");

          // Initialize particlesJS after the splash screen is hidden
          initializeParticles(currentConfig);
        }, 500); // Duration must match the CSS transition duration
      } else {
        console.error("Splash screen element not found");
      }
    }, 100); // Add a small delay to ensure the splash screen is fully rendered
  });

  // Initialize particlesJS with a check to ensure it's defined
  function initializeParticles(config) {
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", config);
      console.log("particlesJS initialized with config:", config);
    } else {
      console.error("particlesJS is not defined");
    }
  }

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

  document
    .getElementById("toggle-particles")
    .addEventListener("click", function () {
      currentConfig =
        currentConfig === particleOneConfig
          ? particleTwoConfig
          : particleOneConfig;
      currentParticle = currentParticle === "One" ? "Two" : "One";
      initializeParticles(currentConfig);
      this.innerText = `Interactive Particle Pattern ${currentParticle}`;
    });

  // Check if particlesJS is defined before accessing its properties
  if (typeof particlesJS !== "undefined" && particlesJS.particles) {
    console.log("particlesJS is defined and particles are present");
    const particlesElement = document.getElementById("particles-js");
    if (particlesElement) {
      console.log("particles-js element found");

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

        if (
          particlesJS.particles.interactivity &&
          particlesJS.particles.interactivity.mouse
        ) {
          particlesJS.particles.interactivity.mouse.pos_x = posX;
          particlesJS.particles.interactivity.mouse.pos_y = posY;
          console.log("Updated particle positions to:", posX, posY);
        } else {
          console.error(
            "particlesJS.particles.interactivity or mouse is undefined"
          );
        }
      }

      // Add event listeners for touch and mouse movements
      particlesElement.addEventListener("mousemove", updateParticles);
      particlesElement.addEventListener("touchmove", updateParticles);
    } else {
      console.error('Element with id "particles-js" not found.');
    }
  } else {
    console.error("particlesJS is not initialized correctly.");
  }
});

$(document).ready(function () {
  console.log("Document ready event fired");

  if ($(".testimonials-content").length) {
    console.log("Testimonials content found, initializing slick carousel");

    $(".testimonials-content").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 30000, // Adjust the speed (in milliseconds) as needed
    });
  } else {
    console.log("No testimonials content found");
  }
});

function toggleMenu() {
  console.log("Toggling menu");

  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".menu-overlay");
  const menuToggle = document.querySelector(".menu-toggle");

  if (menu && overlay && menuToggle) {
    menu.classList.toggle("right-0");
    menu.classList.toggle("right-[-100%]");
    overlay.classList.toggle("hidden");
    menuToggle.classList.toggle("active");
    console.log("Menu toggled successfully");
  } else {
    console.error("Menu elements not found");
  }
}

function toggleTheme() {
  console.log("Toggling theme");

  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  if (body && themeIcon) {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      themeIcon.src = "images/sun-icon.svg";
    } else {
      themeIcon.src = "images/moon-icon.svg";
    }
    console.log("Theme toggled successfully");
  } else {
    console.error("Body or theme icon element not found");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Setting initial theme to dark mode");

  document.body.classList.add("dark-mode");
  const themeIcon = document.getElementById("theme-icon");
  if (themeIcon) {
    themeIcon.src = "images/sun-icon.svg";
  } else {
    console.error("Theme icon element not found");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing gallery lightbox");

  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.getElementById("close-lightbox");

  if (galleryItems && lightbox && lightboxImg && closeLightbox) {
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

    console.log("Gallery lightbox initialized successfully");
  } else {
    console.error("Gallery or lightbox elements not found");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing benefit item animations");

  document.querySelectorAll(".benefit-item").forEach((group) => {
    const icon = group.querySelector(".benefit-icon");
    const text = group.querySelector("p");

    if (icon && text) {
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

      console.log("Benefit item animations initialized for", group);
    } else {
      console.error("Benefit item icon or text not found for", group);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Applying random colors to benefit items");

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

    console.log("Applied random color to benefit item:", randomColor);
  });
});
