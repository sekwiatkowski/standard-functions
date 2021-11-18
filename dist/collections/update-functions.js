"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;
exports.appendTo = appendTo;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.insertAt = insertAt;
exports.remove = remove;
exports.removeAt = removeAt;
exports.removeFirstOccurrence = removeFirstOccurrence;
exports.removeLastOccurrence = removeLastOccurrence;
exports.reverse = reverse;

var _typeFunctions = require("../type-functions");

var _booleanFunctions = require("../boolean-functions");

var _arrayFunctions = require("../array-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function append(appendix) {
  return function (original) {
    if ((0, _typeFunctions.isString)(original)) {
      return original + appendix;
    } else {
      if ((0, _typeFunctions.isArray)(appendix)) {
        return [].concat(_toConsumableArray(original), _toConsumableArray(appendix));
      } else {
        return [].concat(_toConsumableArray(original), [appendix]);
      }
    }
  };
}

function appendTo(original) {
  return function (appendix) {
    return append(appendix)(original);
  };
}

function prepend(prefix) {
  return function (original) {
    if ((0, _typeFunctions.isString)(original)) {
      return prefix + original;
    } else {
      if ((0, _typeFunctions.isArray)(prefix)) {
        return [].concat(_toConsumableArray(prefix), _toConsumableArray(original));
      } else {
        return [prefix].concat(_toConsumableArray(original));
      }
    }
  };
}

function prependTo(original) {
  return function (prefix) {
    return prepend(prefix)(original);
  };
}

function insertAt(index) {
  return function (item) {
    return function (arr) {
      var before = arr.slice(0, index);
      var after = arr.slice(index);
      return [].concat(_toConsumableArray(before), [item], _toConsumableArray(after));
    };
  };
}

function remove(item) {
  return function (arr) {
    var copy = arr.slice();
    var i = arr.length - 1;

    while (i >= 0) {
      if ((0, _booleanFunctions.equals)(item)) {
        copy.splice(i, 1);
      }

      i--;
    }

    return copy;
  };
}

function removeAt(index) {
  return function (arr) {
    var copy = arr.slice();
    copy.splice(index, 1);
    return copy;
  };
}

function removeFirstOccurrence(item) {
  return function (arr) {
    var index = (0, _arrayFunctions.indexOf)(item)(arr);
    return removeAt(index)(arr);
  };
}

function removeLastOccurrence(item) {
  return function (arr) {
    var index = (0, _arrayFunctions.indexOf)(item)(arr);
    return removeAt(index)(arr);
  };
}

function reverse(input) {
  var inputLength = input.length;
  var reversedArray = Array(inputLength);

  for (var i = 0; i < inputLength; i++) {
    reversedArray[i] = input[inputLength - i - 1];
  }

  return reversedArray;
}