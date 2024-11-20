document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelectorAll('.header_gear');
    
    img.forEach(image => {
      let angle = 0;
      setInterval(() => {
        angle += 1; // Збільшуємо кут на 1 градус
        image.style.transform = `rotate(${angle}deg)`; // Застосовуємо обертання
      }, 16); // 16 мс, що відповідає 60 кадрам на секунду
    });
  
    const images = document.querySelectorAll(".galleryImage");
    const images_service = document.querySelectorAll(".galleryImageService");
    const rectangles = document.querySelectorAll(".rectangle_offer");
    const rectangles_service = document.querySelectorAll(".rectangle_service");
    let currentIndex = 0;
  
    function showNextImage() {
      images[currentIndex].style.opacity = 0;
      images_service[currentIndex].style.opacity = 0;
      rectangles[currentIndex].setAttribute("fill", "#D9D9D9");
      rectangles_service[currentIndex].setAttribute("fill", "#D9D9D9");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.opacity = 1;
      images_service[currentIndex].style.opacity = 1;
      rectangles[currentIndex].setAttribute("fill", "#000000");
      rectangles_service[currentIndex].setAttribute("fill", "#000000");
    }
  
    setInterval(showNextImage, 3000);
  });