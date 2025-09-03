document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.subtitle');
    const professions = ["Cyber Security", "Problem Solving", "Suka Tantangan", "Teamwork", "Cancer"];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!subtitle) return; // Exit if subtitle element doesn't exist

        const currentProfession = professions[professionIndex];
        const currentText = currentProfession.substring(0, charIndex);
        subtitle.textContent = currentText;

        if (!isDeleting && charIndex < currentProfession.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            professionIndex = (professionIndex + 1) % professions.length;
            setTimeout(type, 1000);
        }
    }

    type();

    // 2. Efek Glitch Acak (Random Glitch Effect)
    const glitchElement = document.querySelector('.glitch-effect');
    if (glitchElement) {
        setInterval(() => {
            const randomTime = Math.random() * 2000 + 1000;
            glitchElement.style.animation = 'none';
            void glitchElement.offsetWidth;
            glitchElement.style.animation = `glitch 0.5s infinite linear alternate`;
        }, 5000);
    }

    // 3. Animasi Scroll Reveal
    const sections = document.querySelectorAll('.section');
    const heroText = document.querySelector('.hero-text');
    const heroImageContainer = document.querySelector('.hero-image-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    if (heroText && heroImageContainer) {
        setTimeout(() => {
            heroText.classList.add('visible');
            heroImageContainer.classList.add('visible');
        }, 500); // Delay untuk efek intro
    }
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});