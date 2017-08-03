/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var calculateAmortization = function calculateAmortization(principal, years, rate) {
  var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate),
      monthlyRate = _calculateMonthlyPaym.monthlyRate,
      monthlyPayment = _calculateMonthlyPaym.monthlyPayment;

  var balance = principal;
  var amortization = [];
  for (var i = 0; i < years; i++) {
    var interestI = 0;
    var principalI = 0;
    for (var j = 0; j < 12; j++) {
      var interestJ = balance * monthlyRate;
      var principalJ = monthlyPayment - interestJ;
      interestI = interestI + interestJ;
      principalI = principalI + principalJ;
      balance = balance - principalJ;
    }
    amortization.push({ principalI: principalI, interestI: interestI, balance: balance });
  }
  return { monthlyPayment: monthlyPayment, monthlyRate: monthlyRate, amortization: amortization };
};
var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
  var monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return {
    principal: principal,
    years: years,
    rate: rate,
    monthlyPayment: monthlyPayment,
    monthlyRate: monthlyRate
  };
};

document.getElementById('calcBtn').addEventListener('click', function () {
  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;

  var _calculateAmortizatio = calculateAmortization(principal, years, rate),
      monthlyPayment = _calculateAmortizatio.monthlyPayment,
      monthlyRate = _calculateAmortizatio.monthlyRate,
      amortization = _calculateAmortizatio.amortization;

  document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
  amortization.forEach(function (month) {
    return console.log(month);
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map