import "./modules/calculator.js";
// import { DATA } from "./data/data.js";
import { burgerMenuToggle } from "./modules/burger-menu.js"
import { changeSlide } from "./modules/slider.js";
import { changeSlides } from './modules/slider-intro.js'

window.addEventListener('DOMContentLoaded', () => {
  setInterval(changeSlide, 4000);
  setInterval(changeSlides, 4000);
  burgerMenuToggle();
});

