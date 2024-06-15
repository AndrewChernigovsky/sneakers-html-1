document.addEventListener('DOMContentLoaded', () => {
  // Найти все слайды
  const slides = document.querySelectorAll('.slider__slide');
  let currentSlide = 0;

  // Функция для переключения слайдов
  const changeSlide = () => {
    slides[currentSlide].classList.remove('slider__active');
    
    currentSlide = (currentSlide + 1) % slides.length; // Рассчитать следующий слайд
    
    slides[currentSlide].classList.add('slider__active'); // Добавить класс 'slider__active' следующему слайду
  };

  slides[0].classList.add('slider__active'); // Установить класс 'slider__active' первому слайду при загрузке страницы

  setInterval(changeSlide, 6000); // Каждые 5 секунд
});