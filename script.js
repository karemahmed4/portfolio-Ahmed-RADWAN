// Initialize Swiper with autoplay only
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.workSwiper')) {
        const workSwiper = new Swiper('.workSwiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            grabCursor: true,
            touchRatio: 1,
            speed: 600,
            effect: 'slide',
        });
    }

    // Add reveal class to elements for scroll animation
    const elementsToReveal = document.querySelectorAll(
        '.stat-item, .service-card, .expertise-card, .distinction-card, .contact-item, .section-title'
    );
    elementsToReveal.forEach(el => el.classList.add('reveal'));

    // Reveal on scroll function
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ===== Smooth scroll for navigation links =====
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});