document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider__slide');
  
  // Функция для получения следующего слайда по data-slide
  const getNextSlide = (currentSlide) => {
    const currentSlideNumber = parseInt(currentSlide.dataset.slide);
    const nextSlideNumber = (currentSlideNumber % slides.length) + 1;
    return document.querySelector(`.slider__slide[data-slide="${nextSlideNumber}"]`);
  };

  let currentSlide = slides[0];
  currentSlide.classList.add('slider__active');

  const changeSlide = () => {
    currentSlide.classList.remove('slider__active');
    currentSlide = getNextSlide(currentSlide);
    currentSlide.classList.add('slider__active');
  };

  setInterval(changeSlide, 6000); // Переключение каждые 6 секунд
});

/* document.addEventListener('DOMContentLoaded', () => {
  // Найти все слайды
  const slides = document.querySelectorAll('.slider__slide');
  let currentSlide = 0;

  // Функция для переключения слайдов
  const changeSlide = () => {
    slides[currentSlide].classList.remove('slider__active');   //удаляет класс
    currentSlide = (currentSlide + 1) % slides.length; // Рассчитать следующий слайд
    slides[currentSlide].classList.add('slider__active'); // Добавить класс 'slider__active' следующему слайду
  };

  slides[0].classList.add('slider__active'); // Установить класс 'slider__active' первому слайду при загрузке страницы

  setInterval(changeSlide, 6000); // Каждые 5 секунд
}); */