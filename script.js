// Реєструємо плагін ScrollTrigger, щоб він працював
gsap.registerPlugin(ScrollTrigger);

// 1. АНІМАЦІЯ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ
const tl = gsap.timeline();

// Текст виїжджає знизу (y: 100) і стає видимим
tl.from(".hero-title", { 
    y: 100, 
    opacity: 0, 
    duration: 1.2, 
    ease: "power4.out" 
})
// Блок з "кюртошем" збільшується (scale: 0.5)
.from(".hero-product", { 
    scale: 0.5, 
    opacity: 0, 
    duration: 1.5, 
    ease: "back.out(1.5)" 
}, "-=0.8"); // Це означає: почати цю анімацію на 0.8 секунд раніше завершення попередньої


// 2. АНІМАЦІЯ ПРИ ПРОКРУЧУВАННІ СТОРІНКИ (Скролінг)

// Лівий блок виїжджає зліва
gsap.from(".info-left", {
    scrollTrigger: {
        trigger: ".scroll-section", // Секція, яка запускає анімацію
        start: "top 70%", // Анімація стартує, коли верх секції досягає 70% висоти екрану
    },
    x: -200, // Починає рух з -200 пікселів по осі X (зліва)
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

// Правий блок виїжджає справа
gsap.from(".info-right", {
    scrollTrigger: {
        trigger: ".scroll-section",
        start: "top 40%", // Стартує трохи пізніше, коли користувач прокрутить нижче
    },
    x: 200, // Починає рух з +200 пікселів по осі X (справа)
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});
