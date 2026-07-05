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


const modal = document.getElementById('registerModal');
const closeBtn = document.getElementById('closeModal');
const togglePwd = document.getElementById('togglePassword');
const toggleConf = document.getElementById('toggleConfirm');
const passwordFld = document.getElementById('passwordField');
const confirmFld = document.getElementById('confirmField');

// Open modal when ANY .btn-primary, .nav-cta, or .whatsapp-btn is clicked
// EXCEPT the whatsapp-btn and the "Be Part of It" button — those stay as links
document.querySelectorAll('.btn-primary, .nav-cta').forEach((btn) => {
  // skip buttons that link to #join (they scroll, not open modal)
  btn.addEventListener('click', (e) => {
    const href = btn.getAttribute('href');
    // only open modal for join/earn CTAs, not internal nav links
    if (href === '#join' || href === null) {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

// Close when clicking outside the modal box
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Password show/hide toggle
function toggleVisibility(field, btn) {
  const isPassword = field.type === 'password';
  field.type = isPassword ? 'text' : 'password';
  btn.style.color = isPassword ? '#00C9B1' : '#94A3B8';
}

togglePwd.addEventListener('click', () => toggleVisibility(passwordFld, togglePwd));
toggleConf.addEventListener('click', () => toggleVisibility(confirmFld, toggleConf));