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

document.querySelector('.submit-button').addEventListener('click', function () {
    // Знаходимо всі поля
    const nameField = document.querySelector('.input-field1').value.trim();
    const phoneField = document.querySelector('.input-field2').value.trim();
    const petNameField = document.querySelector('.input-field3').value.trim();
    const commentField = document.querySelector('.input-field4').value.trim();
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');

    // Перевірка заповнення полів
    if (nameField && phoneField && petNameField && commentField) {
      modalMessage.textContent = 'Дані успішно відправлено! Дякуємо';
      modalMessage.style.color = 'green';
    } else {
      modalMessage.textContent = 'Будь ласка, заповніть всі дані.';
      modalMessage.style.color = 'red';
    }

    // Показуємо модальне вікно
    modal.style.display = 'block';
  });

  // Закриття модального вікна
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });

  // Закриття модального вікна при натисканні за межами вікна
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


