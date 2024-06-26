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
    group.addEventListener("mouseover", () => {
      const icon = group.querySelector(".benefit-icon");
      const text = group.querySelector("p");
      icon.classList.add("animate-blowUpIcon");
      text.classList.add("animate-blowUpText");
    });

    group.addEventListener("mouseleave", () => {
      const icon = group.querySelector(".benefit-icon");
      const text = group.querySelector("p");
      icon.classList.remove("animate-blowUpIcon");
      text.classList.remove("animate-blowUpText");
    });
  });
});
