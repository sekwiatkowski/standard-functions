"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;
exports.lower = lower;
exports.upper = upper;
exports.capitalize = capitalize;

function repeat(n) {
  return function (s) {
    var result = '';

    for (var i = 0; i < n; i++) {
      result += s;
    }

    return result;
  };
}

function lower(input) {
  return input.toLowerCase();
}

function upper(input) {
  return input.toUpperCase();
}

function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}