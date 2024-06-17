"use strict";

require("./modules/calculator.js");

var _data = require("./data/data.js");

var _auth = require("./modules/auth/auth");

window.addEventListener('DOMContentLoaded', _auth.onWindowLoad, console.log(_data.DATA, 'data'));