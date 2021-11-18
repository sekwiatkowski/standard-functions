"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.mapNotNull = mapNotNull;
exports.flatMap = flatMap;
exports.intersperse = intersperse;
exports.fill = fill;

var _lengthFunctions = require("../collections/length-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function map(f) {
  return function (arr) {
    return arr.map(f);
  };
}

function mapNotNull(f) {
  return function (arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      var y = f(arr[i]);

      if (y) {
        result.push(y);
      }
    }

    return result;
  };
}

function flatMap(f) {
  return function (arr) {
    return arr.flatMap(f);
  };
}

function intersperse(interspersion) {
  return function (arr) {
    if ((0, _lengthFunctions.isSingleOrEmpty)(arr)) {
      return _toConsumableArray(arr);
    }

    var arrLength = arr.length;
    var newSize = 2 * arrLength - 1;
    var result = new Array(newSize);
    var indexArray = 0;

    while (indexArray < arrLength) {
      result[2 * indexArray] = arr[indexArray];
      indexArray++;
    }

    var indexInterspersion = 1;

    while (indexInterspersion < newSize - 1) {
      result[indexInterspersion] = interspersion;
      indexInterspersion += 2;
    }

    return result;
  };
}

function fill(value) {
  return function (n) {
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = value;
    }

    return result;
  };
}