// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.portfolioSwiper')) {
        new Swiper('.portfolioSwiper', {
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
            speed: 600,
        });
    }

    // Reveal animation on scroll
    const reveals = document.querySelectorAll('.stat-card, .service-card, .expertise-card, .distinction-card, .contact-icon, .section-title');
    reveals.forEach(el => el.classList.add('reveal'));

    function revealOnScroll() {
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

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
