"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.excludeNull = excludeNull;

var _arrayFunctions = require("./array-functions");

var _objectFunctions = require("./object-functions");

function isNull(input) {
  return input === null;
}

function isNotNull(input) {
  return input !== null;
}

function excludeNull(objOrArray) {
  if ((0, _arrayFunctions.isArray)(objOrArray)) {
    return (0, _arrayFunctions.exclude)(isNull)(objOrArray);
  } else if ((0, _objectFunctions.isObject)(objOrArray)) {
    return (0, _objectFunctions.excludeValues)(isNull)(objOrArray);
  }
}