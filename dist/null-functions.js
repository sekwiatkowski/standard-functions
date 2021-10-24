"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.excludeNull = excludeNull;
exports.defaultValue = defaultValue;

var _arrayFunctions = require("./array-functions");

var _stringOrArrayFunctions = require("./string-or-array-functions");

function isNull(input) {
  return input === null;
}

function isNotNull(input) {
  return input !== null;
}

function isDefined(input) {
  return input !== undefined;
}

function isUndefined(input) {
  return input === undefined;
}

function excludeNull(input) {
  if ((0, _stringOrArrayFunctions.isSingle)(arguments)) {
    if (isNull(input)) {
      return [];
    } else if ((0, _arrayFunctions.isArray)(input)) {
      return (0, _arrayFunctions.exclude)(isNull)(input);
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