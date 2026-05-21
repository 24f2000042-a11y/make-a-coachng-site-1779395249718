document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        alert('Thank you, ' + name + '! Your message has been sent.');
        form.reset();
    });

    // Scroll fade-in
    const fadeElems = document.querySelectorAll('[data-fade]');
    const onScroll = () => {
        const viewportHeight = window.innerHeight;
        fadeElems.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < viewportHeight - 100) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
});