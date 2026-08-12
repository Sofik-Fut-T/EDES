// Фільтрація за категоріями
function filterCategory(category, button) {
    // Змінюємо активну кнопку
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Фільтруємо картки
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-cat') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Лічильник товарів у кошику
let cartCount = 0;
function addToCart(btn) {
    cartCount++;
    
    // Оновлюємо текст у шапці (кнопка Кошик)
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.textContent = `Кошик (${cartCount})`;
    }

    // Невелика анімація кнопки при натисканні
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => {
        btn.style.transform = 'none';
    }, 200);
}
