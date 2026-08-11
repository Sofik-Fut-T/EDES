// Кастомний курсор
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    // Курсор літає за мишкою плавно
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Ефект при наведенні на кнопки
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(cursor, { width: 50, height: 50, backgroundColor: "rgba(230, 81, 0, 0.2)" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(cursor, { width: 30, height: 30, backgroundColor: "transparent" });
    });
});

gsap.registerPlugin(ScrollTrigger);

// Анімація появи головного екрана
const tl = gsap.timeline();

tl.from(".hero-title", { 
    y: 100, 
    opacity: 0, 
    duration: 1.5, 
    ease: "power4.out" 
});

// Додаткова анімація для карток (вони трохи вицвітають, коли на них наїжджає наступна)
gsap.utils.toArray('.wow-card').forEach((card, index, array) => {
    if (index !== array.length - 1) { // Для всіх карток, крім останньої
        gsap.to(card, {
            scale: 0.95, // Картка трохи зменшується
            opacity: 0.5, // і темніє
            scrollTrigger: {
                trigger: card,
                start: "top 15vh", // Коли картка прилипла
                end: "bottom 15vh", // Коли наступна картка доїхала
                scrub: true, // Анімація йде за скролом
            }
        });
    }
});
