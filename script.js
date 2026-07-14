gsap.registerPlugin(ScrollTrigger);

// 1. Анімація при завантаженні (Перша секція)
const tl = gsap.timeline();

tl.from(".hero-title", { 
    y: 50, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out" 
})
.from(".hero-product", { 
    scale: 0.8, 
    opacity: 0, 
    duration: 1, 
    ease: "back.out(1.5)" 
}, "-=0.5");


// 2. Анімація при скролінгу (Темна секція)

// Ліві блоки
gsap.utils.toArray('.info-left').forEach(block => {
    gsap.from(block, {
        scrollTrigger: { trigger: block, start: "top 85%" },
        x: -150, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power3.out"
    });
});

// Центральні блоки
gsap.utils.toArray('.info-center').forEach(block => {
    gsap.from(block, {
        scrollTrigger: { trigger: block, start: "top 85%" },
        y: 100, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power3.out"
    });
});

// Праві блоки
gsap.utils.toArray('.info-right').forEach(block => {
    gsap.from(block, {
        scrollTrigger: { trigger: block, start: "top 85%" },
        x: 150, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power3.out"
    });
});
