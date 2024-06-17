import "./modules/calculator.js";
import { DATA } from "./data/data.js";
import { onWindowLoad } from "./modules/auth/auth";

window.addEventListener('DOMContentLoaded', onWindowLoad, console.log(DATA, 'data'));
