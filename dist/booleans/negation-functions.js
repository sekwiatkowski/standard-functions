"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = not;
exports.negate = negate;

function not(predicate) {
  return function (x) {
    return !predicate(x);
  };
}

function negate(value) {
  return !value;
}