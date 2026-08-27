// Efect pe bara de navigare la scroll
console.log("Scriptul functioneaza!");

document.addEventListener('DOMContentLoaded', () => {
  // Animație Typewriter
  new Typed('#typed-text', {
    strings: [
      'Junior Web Developer.',
      'Passionate Tech Enthusiast.',
      'Junior Software QA Engineer.'
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });

  // Deschidere/Închidere meniu burger pe mobil
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Închide meniul la apăsarea oricărui link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});

// Umbră pe navbar la scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});
