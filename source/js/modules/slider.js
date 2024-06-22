// Найти все слайды
const slides = document.querySelectorAll('.slider__slide');
let currentSlide = 0;

// Функция для переключения слайдов
export const changeSlide = () => {
  slides[currentSlide].classList.remove('slider__active');   //удаляет класс
  currentSlide = (currentSlide + 1) % slides.length; // Рассчитать следующий слайд
  slides[currentSlide].classList.add('slider__active'); // Добавить класс 'slider__active' следующему слайду
};
