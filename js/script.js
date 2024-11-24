document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelectorAll('.rotate');
    
    img.forEach(image => {
        let angle = 0;
        setInterval(() => {
            angle += 1; // Збільшуємо кут на 1 градус
            image.style.transform = `rotate(${angle}deg)`; // Застосовуємо обертання
        }, 16); // 16 мс, що відповідає 60 кадрам на секунду
    });
    // JavaScript для бургер-меню
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
});


// Створюємо спостерігач
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Якщо елемент потрапив у область видимості
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Додаємо клас для анімації
            observer.unobserve(entry.target); // Прибираємо спостереження, щоб уникнути зайвих перевірок
        }
    });
}, {
    threshold: 0.2 // Встановлюємо поріг, коли елемент буде вважатися видимим
});

// Застосовуємо спостерігач до всіх карток
document.querySelectorAll('.specialist-card').forEach(card => {
    observer.observe(card);
});



