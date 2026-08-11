// 1. ПРЕЛОАДЕР (Запуск анімацій тільки після завантаження сторінки)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    // Плавно ховаємо прелоадер
    gsap.to(preloader, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            preloader.style.display = 'none';
            initAnimations(); // Запускаємо магію сайту
        }
    });
});

// Головна функція з усіма анімаціями
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Анімація появи головного екрана
    const tl = gsap.timeline();
    tl.from(".hero-content", { y: 50, opacity: 0, duration: 1.2, ease: "power4.out" });

    // Перевіряємо, чи це НЕ телефон (щоб увімкнути курсор і накладання карток)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        // Кастомний курсор
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
        });

        const hoverElements = document.querySelectorAll('button, .flavor-link');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { width: 50, height: 50, backgroundColor: "rgba(230, 81, 0, 0.3)", border: "none" });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { width: 30, height: 30, backgroundColor: "transparent", border: "2px solid #E65100" });
            });
        });

        // Анімація затемнення карток (тільки для ПК)
        gsap.utils.toArray('.wow-card').forEach((card, index, array) => {
            if (index !== array.length - 1) { 
                gsap.to(card, {
                    scale: 0.95, 
                    opacity: 0.3, 
                    scrollTrigger: {
                        trigger: card,
                        start: "top 12vh", 
                        end: "bottom 12vh", 
                        scrub: true, 
                    }
                });
            }
        });
    }

    // Плавний скрол для бокового меню
    document.querySelectorAll('.flavor-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Оновлюємо тригери, якщо змінився розмір екрану
    ScrollTrigger.refresh();
}
