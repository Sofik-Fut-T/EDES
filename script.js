// Кастомний курсор
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
});

// Ефект при наведенні на будь-які клікабельні елементи (кнопки та меню)
const hoverElements = document.querySelectorAll('button, .flavor-link');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { width: 50, height: 50, backgroundColor: "rgba(230, 81, 0, 0.3)", border: "none" });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { width: 30, height: 30, backgroundColor: "transparent", border: "2px solid #E65100" });
    });
});

// Плавний скрол для бокового меню
document.querySelectorAll('.flavor-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

// Анімація появи головного екрана
const tl = gsap.timeline();
tl.from(".hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });

// Анімація для карток (затемнення при накладанні)
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
