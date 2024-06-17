import "./modules/calculator.js";
// import { data } from "./data/data.js";
import { onWindowLoad } from "./modules/auth/auth";
import { burgerMenuToggle } from "./modules/burger-menu.js"

window.addEventListener('DOMContentLoaded', onWindowLoad);
burgerMenuToggle();

