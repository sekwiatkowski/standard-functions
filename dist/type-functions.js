"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.isBoolean = isBoolean;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.is2DArray = is2DArray;
exports.defaultValue = defaultValue;
exports.isObject = isObject;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isDefined(input) {
  return input !== undefined;
}

function isUndefined(input) {
  return input === undefined;
}

function isNull(input) {
  return input === null;
}

function isNotNull(input) {
  return input !== null;
}

function isBoolean(input) {
  return input === false || input === true;
}

function isNumber(input) {
  return typeof input === 'number';
}

function isString(input) {
  return typeof input === 'string';
}

function isFunction(input) {
  return typeof input === 'function';
}

function isArray(input) {
  return Array.isArray(input);
}

function is2DArray(input) {
  return isArray(input) && isArray(input[0]);
}

function defaultValue(value) {
  return function (input) {
    return input !== null && input !== void 0 ? input : value;
  };
}

function isObject(input) {
  return _typeof(input) === 'object';
}