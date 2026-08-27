// Efect pe bara de navigare la scroll
console.log("Scriptul functioneaza!");
document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-text', {
        strings: [
            'Junior Web Developer.',
            'Passionate Tech Enthusiast.',
            'Junior Software QA Engineer.',
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
});
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 30) {
        navbar.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
})
