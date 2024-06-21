document.addEventListener("scroll", function () {
  const video = document.getElementById("bg-video");
  const rect = video.getBoundingClientRect();
  const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

  if (inView) {
    video.play();
  } else {
    video.pause();
  }
});

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
const links = document.querySelectorAll("nav a, .book-now");

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

window.addEventListener("scroll", function () {
  const aboutSection = document.querySelector("#about");
  let scrollPosition = window.scrollY;
  aboutSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});
