"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = tail;
exports.headAndTail = headAndTail;
exports.init = init;
exports.initAndLast = initAndLast;
exports.take = take;
exports.takeFrom = takeFrom;
exports.takeLast = takeLast;
exports.takeLastFrom = takeLastFrom;
exports.takeWhile = takeWhile;
exports.drop = drop;
exports.dropFrom = dropFrom;
exports.dropLast = dropLast;
exports.dropLastFrom = dropLastFrom;
exports.dropWhile = dropWhile;
exports.append = append;
exports.appendTo = appendTo;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.insertAt = insertAt;
exports.remove = remove;
exports.removeAt = removeAt;
exports.removeFirstOccurrence = removeFirstOccurrence;
exports.removeLastOccurrence = removeLastOccurrence;
exports.concat = concat;
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
exports.isOfLength = isOfLength;
exports.isSingleOrEmpty = isSingleOrEmpty;
exports.isShorterThan = isShorterThan;
exports.isLongerThan = isLongerThan;
exports.length = length;
exports.reverse = reverse;
exports.isMultiple = exports.isSingle = void 0;

var _arrayFunctions = require("./array-functions");

var _booleanFunctions = require("./boolean-functions");

var _typeFunctions = require("./type-functions");

var _singleAccessFunctions = require("./single-access-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tail(input) {
  var length = input.length;

  if (length <= 1) {
    return [];
  }

  var tailLength = length - 1;
  var res = Array(tailLength);

  for (var i = 0; i < tailLength; i++) {
    res[i] = input[i + 1];
  }

  return res;
}

function headAndTail(input) {
  return [(0, _singleAccessFunctions.head)(input), tail(input)];
}

function init(input) {
  var size = input.length - 1;
  var res = Array(size);

  for (var i = 0; i < size; i++) {
    res[i] = input[i];
  }

  return res;
}

function initAndLast(input) {
  return [init(input), (0, _singleAccessFunctions.last)(input)];
}

function take(n) {
  return function (input) {
    return input.slice(0, n);
  };
}

function takeFrom(input) {
  return function (n) {
    return take(n)(input);
  };
}

function takeLast(n) {
  return function (input) {
    return input.slice(Math.max(input.length - n, 0));
  };
}

function takeLastFrom(input) {
  return function (n) {
    return takeLast(n)(input);
  };
}

function takeWhile(predicate) {
  return function (input) {
    var res = [];

    for (var i = 0; i < input.length; i++) {
      var item = input[i];

      if (!predicate(item, i)) {
        return res;
      }

      res.push(item);
    }

    return res;
  };
}

function drop(n) {
  return function (input) {
    return input.slice(n);
  };
}

function dropFrom(input) {
  return function (n) {
    return drop(n)(input);
  };
}

function dropLast(n) {
  return function (input) {
    return input.slice(0, -n);
  };
}

function dropLastFrom(input) {
  return function (n) {
    return dropLast(n)(input);
  };
}

function dropWhile(predicate) {
  return function (input) {
    var dropped = 0;

    while (dropped < input.length) {
      var item = input[dropped];

      if (predicate(item, dropped)) {
        dropped++;
      } else {
        break;
      }
    }

    return input.slice(dropped);
  };
}

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

function remove(itemOrPredicate) {
  return function (arr) {
    var copy = arr.slice();
    var predicate = (0, _typeFunctions.isFunction)(itemOrPredicate) ? itemOrPredicate : (0, _booleanFunctions.equals)(itemOrPredicate);
    var i = arr.length - 1;

    while (i >= 0) {
      if (predicate(arr[i])) {
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

function concat() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  if (items.length === 1) {
    var firstItem = items[0];

    if ((0, _typeFunctions.isArray)(firstItem)) {
      // 2D array with a single item
      if (firstItem.length === 1) {
        return firstItem[0];
      } else {
        return concat.apply(void 0, _toConsumableArray(firstItem));
      }
    }
  }

  var initial = (0, _typeFunctions.isString)(items[0]) ? '' : [];
  return items.reduce(function (acc, s) {
    return acc.concat(s);
  }, initial);
}

function isEmpty(collection) {
  return collection.length === 0;
}

function isNotEmpty(collection) {
  return collection.length > 0;
}

function isOfLength(length) {
  return function (collection) {
    return collection.length === length;
  };
}

var isSingle = isOfLength(1);
exports.isSingle = isSingle;
var isMultiple = isLongerThan(1);
exports.isMultiple = isMultiple;

function isSingleOrEmpty(collection) {
  return isEmpty(collection) || isSingle(collection);
}

function isShorterThan(length) {
  return function (collection) {
    return collection.length < length;
  };
}

function isLongerThan(length) {
  return function (collection) {
    return collection.length > length;
  };
}

function length(collection) {
  return collection.length;
}

function reverse(input) {
  var inputLength = input.length;
  var reversedArray = Array(inputLength);

  for (var i = 0; i < inputLength; i++) {
    reversedArray[i] = input[inputLength - i - 1];
  }

  return reversedArray;
}