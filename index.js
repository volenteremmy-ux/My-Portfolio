const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// Apply to all containers and cards
document.querySelectorAll('.glass-container, .sample-card, .service-item, .text-content').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
});