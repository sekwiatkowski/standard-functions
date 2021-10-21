"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = isNumber;
exports.greaterThan = greaterThan;
exports.lessThan = lessThan;
exports.isBetween = isBetween;
exports.min = min;
exports.max = max;
exports.sumBy = sumBy;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.productBy = productBy;
exports.product = exports.sum = exports.changeSign = void 0;

var _arrayFunctions = require("./array-functions");

var _higherOrderFunctions = require("./higher-order-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isNumber(input) {
  return typeof input === 'number';
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

function isBetween(start) {
  return function (end) {
    return function (x) {
      return start <= x && x < end;
    };
  };
}

function min(arr) {
  if (arguments.length > 1) {
    return Math.min.apply(Math, _toConsumableArray(Array.prototype.slice.call(arguments)));
  }

  return Math.min.apply(Math, _toConsumableArray(arr));
}

function max(arr) {
  if (arguments.length > 1) {
    return Math.max.apply(Math, _toConsumableArray(Array.prototype.slice.call(arguments)));
  }

  return Math.max.apply(Math, _toConsumableArray(arr));
}

function sumBy(f) {
  return function (xs) {
    return (0, _arrayFunctions.fold)(function (acc, x) {
      return acc + f(x);
    })(0)(xs);
  };
}

function add(y) {
  return function (x) {
    return x + y;
  };
}

function subtract(y) {
  return function (x) {
    return x - y;
  };
}

function multiply(y) {
  return function (x) {
    return y * x;
  };
}

var changeSign = multiply(-1);
exports.changeSign = changeSign;

function divide(y) {
  return function (x) {
    return y / x;
  };
}

var sum = sumBy(_higherOrderFunctions.identity);
exports.sum = sum;

function productBy(f) {
  return function (xs) {
    return (0, _arrayFunctions.fold)(function (acc, x) {
      return acc * f(x);
    })(1)(xs);
  };
}

var product = productBy(_higherOrderFunctions.identity);
exports.product = product;