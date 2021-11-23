"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mod = mod;
exports.abs = abs;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.changeSign = void 0;

function mod(dividend) {
  return function (divisor) {
    return divisor % dividend;
  };
}

function abs(value) {
  return Math.abs(value);
}

function add(y) {
  return function (x) {
    return x + y;
  };
}

function subtract(y) {
  return function (x) {
    return x - y;
  };
}

function multiply(y) {
  return function (x) {
    return y * x;
  };
}

var changeSign = multiply(-1);
exports.changeSign = changeSign;

function divide(y) {
  return function (x) {
    return y / x;
  };
}