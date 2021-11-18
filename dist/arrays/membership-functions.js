"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contains = contains;
exports.isContainedIn = isContainedIn;
exports.doesNotContain = doesNotContain;
exports.isNotContainedIn = isNotContainedIn;
exports.containsAll = containsAll;
exports.areContainedIn = areContainedIn;

var _booleanFunctions = require("../boolean-functions");

var _lengthFunctions = require("../collections/length-functions");

var _singleAccessFunctions = require("../collections/single-access-functions");

var _typeFunctions = require("../type-functions");

var _someFunctions = require("../booleans/some-functions");

var _noneFunctions = require("../booleans/none-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function contains(item) {
  return function (arr) {
    return (0, _someFunctions.some)((0, _booleanFunctions.equals)(item))(arr);
  };
}

function isContainedIn(arr) {
  return function (item) {
    return contains(item)(arr);
  };
}

function doesNotContain(item) {
  return function (arr) {
    return (0, _noneFunctions.none)((0, _booleanFunctions.equals)(item))(arr);
  };
}

function isNotContainedIn(arr) {
  return function (item) {
    return doesNotContain(item)(arr);
  };
}

function containsAll() {
  for (var _len = arguments.length, candidateItemsOrArray = new Array(_len), _key = 0; _key < _len; _key++) {
    candidateItemsOrArray[_key] = arguments[_key];
  }

  if ((0, _lengthFunctions.isSingle)(candidateItemsOrArray)) {
    var firstCandidateItem = (0, _singleAccessFunctions.first)(candidateItemsOrArray);

    if ((0, _typeFunctions.isArray)(firstCandidateItem)) {
      return containsAll.apply(void 0, _toConsumableArray(firstCandidateItem));
    }
  }

  return function () {
    for (var _len2 = arguments.length, itemsOrArray = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      itemsOrArray[_key2] = arguments[_key2];
    }

    if ((0, _lengthFunctions.isSingle)(itemsOrArray)) {
      var firstItem = (0, _singleAccessFunctions.first)(itemsOrArray);

      if ((0, _typeFunctions.isArray)(firstItem)) {
        return containsAll(candidateItemsOrArray).apply(void 0, _toConsumableArray(firstItem));
      }
    }

    for (var i = 0; i < candidateItemsOrArray.length; i++) {
      if (!itemsOrArray.includes(candidateItemsOrArray[i])) {
        return false;
      }
    }

    return true;
  };
}

function areContainedIn(itemsOrArray) {
  return function (candidateItemsOrArray) {
    return containsAll(candidateItemsOrArray)(itemsOrArray);
  };
}