const SLIDES = document.querySelectorAll('.intro__images picture > img');

let currentSlide = 0;

export const changeSlides = () => {
  if (SLIDES.length)
    Array.from(SLIDES)[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % Array.from(SLIDES).length;
  Array.from(SLIDES)[currentSlide].classList.add('active');
};
