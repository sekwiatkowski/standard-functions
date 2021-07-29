"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.multiply = multiply;
exports.greaterThan = greaterThan;
exports.lessThan = lessThan;
exports.isNumber = isNumber;

function add(x) {
  return function (y) {
    return x + y;
  };
}

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

function greaterThan(value) {
  return function (x) {
    return x > value;
  };
}

function lessThan(value) {
  return function (x) {
    return x < value;
  };
}

function isNumber(input) {
  return typeof input === 'number';
}