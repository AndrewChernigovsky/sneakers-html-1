import "./modules/calculator.js";
import { DATA } from "./data/data.js";
import { onWindowLoad } from "./modules/auth/auth";
import { burgerMenuToggle } from "./modules/burger-menu.js"
import { changeSlide } from "./modules/slider.js";

window.addEventListener('DOMContentLoaded', onWindowLoad, setInterval(changeSlide, 2000));

