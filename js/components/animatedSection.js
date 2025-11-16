
export const initAnimatedSections = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => {
        section.classList.add('fade-in-up');
        observer.observe(section);
    });
};
