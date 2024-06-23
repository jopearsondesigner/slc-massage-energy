function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".menu-overlay");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
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

// Smooth Scroll
const links = document.querySelectorAll("nav a");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
}

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});
