/* =========================
   NAVIGATION MENU
========================= */
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

// Toggle mobile menu
function toggleMenu() {
  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

// Close mobile menu
function closeMenu() {
  if (navMenu) {
    navMenu.classList.remove("active");
  }
}

// Close menu when clicking a nav link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

/* =========================
   SMOOTH SCROLL TO SECTIONS
========================= */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
