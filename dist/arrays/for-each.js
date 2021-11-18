"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;

function forEach(f) {
  return function (arr) {
    arr.forEach(f);
  };
}