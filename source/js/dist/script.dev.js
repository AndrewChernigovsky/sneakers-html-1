"use strict";

require("./modules/calculator.js");

var _data = require("./data/data.js");

var _auth = require("./modules/auth/auth");

var _burgerMenu = require("./modules/burger-menu.js");

window.addEventListener('DOMContentLoaded', _auth.onWindowLoad, (0, _burgerMenu.burgerMenuToggle)(), console.log(_data.DATA, 'data'));