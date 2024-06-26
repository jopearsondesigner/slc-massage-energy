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

// Set the default theme to dark mode
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark-mode");
  document.getElementById("theme-icon").src = "images/sun-icon.svg";
});

document.addEventListener("DOMContentLoaded", () => {
  // Ensure DOM is loaded
  const galleryItems = document.querySelectorAll(".gallery-item a");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.getElementById("close-lightbox");

  galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      lightboxImg.src = item.href;
      lightboxImg.alt = item.dataset.title;
      lightbox.classList.remove("hidden");
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });
});
