"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.isNotNull = isNotNull;

function isNull(input) {
  return input === null;
}

function isNotNull(input) {
  return input !== null;
}