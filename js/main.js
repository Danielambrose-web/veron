// ===========================
//  VIREON — MINIMAL VERSION
//  main.js
//  (no scroll animations)
// ===========================

// Sticky nav shadow on scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
  } else {
    nav.style.boxShadow = "none";
  }
});
