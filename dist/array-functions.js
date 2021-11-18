"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = fill;

function fill(value) {
  return function (n) {
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = value;
    }

    return result;
  };
}