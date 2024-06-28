$(document).ready(function () {
  if ($(".testimonials-content").length) {
    $(".testimonials-content").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000, // Adjust the speed (in milliseconds) as needed
    });
  }
});

function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".menu-overlay");
  menu.classList.toggle("right-0");
  menu.classList.toggle("right-[-100%]");
  overlay.classList.toggle("hidden");
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
