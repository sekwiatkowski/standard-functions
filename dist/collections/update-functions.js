"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;
exports.updateBy = updateBy;
exports.swap = swap;
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

var _searchFunctions = require("../arrays/search-functions");

var _equalityFunctions = require("../booleans/equality-functions");

var _filteringFunctions = require("../arrays/filtering-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function update(index) {
  return function (item) {
    return function (arr) {
      var copy = arr.slice();
      copy[index] = item;
      return copy;
    };
  };
}

function updateBy(f) {
  return function (index) {
    return function (arr) {
      var copy = arr.slice();
      copy[index] = f(arr[index]);
      return copy;
    };
  };
}

function swap(first) {
  return function (second) {
    return function (arr) {
      if (first >= second) {
        throw Error('The second index must be greater than the first index.');
      }

      var beforeFirst = arr.slice(0, first);
      var between = arr.slice(first + 1, second);
      var afterSecond = arr.slice(second + 1);
      return [].concat(_toConsumableArray(beforeFirst), [arr[second]], _toConsumableArray(between), [arr[first]], _toConsumableArray(afterSecond));
    };
  };
}

function append(appendix) {
  return function (original) {
    if ((0, _typeFunctions.isString)(original)) {
      return original + appendix;
    } else {
      return [].concat(_toConsumableArray(original), [appendix]);
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
      return [prefix].concat(_toConsumableArray(original));
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
    return (0, _filteringFunctions.exclude)((0, _equalityFunctions.equals)(item))(arr);
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
    var index = (0, _searchFunctions.indexOf)(item)(arr);
    return removeAt(index)(arr);
  };
}

function removeLastOccurrence(item) {
  return function (arr) {
    var index = (0, _searchFunctions.indexOf)(item)(arr);
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