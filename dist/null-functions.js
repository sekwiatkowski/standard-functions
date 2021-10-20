"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.excludeNull = excludeNull;
exports.defaultValue = defaultValue;

var _arrayFunctions = require("./array-functions");

var _objectFunctions = require("./object-functions");

var _stringOrArrayFunctions = require("./string-or-array-functions");

function isNull(input) {
  return input === null;
}

function isNotNull(input) {
  return input !== null;
}

function excludeNull(input) {
  if ((0, _stringOrArrayFunctions.isSingle)(arguments)) {
    if (isNull(input)) {
      return [];
    } else if ((0, _arrayFunctions.isArray)(input)) {
      return (0, _arrayFunctions.exclude)(isNull)(input);
    } else if ((0, _objectFunctions.isObject)(input)) {
      return (0, _objectFunctions.excludeValues)(isNull)(input);
    } else {
      return [input];
    }
  } else {
    return excludeNull(Array.prototype.slice.call(arguments));
  }
}

function defaultValue(value) {
  return function (input) {
    return input !== null && input !== void 0 ? input : value;
  };
}