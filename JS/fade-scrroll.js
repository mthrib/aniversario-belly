function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        const triggerPoint = windowHeight * 0.5; // 50vh

        if (elementTop < triggerPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active'); // opcional
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();