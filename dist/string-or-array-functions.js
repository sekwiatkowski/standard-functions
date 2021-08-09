"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nth = nth;
exports.head = head;
exports.tail = tail;
exports.headAndTail = headAndTail;
exports.init = init;
exports.initAndLast = initAndLast;
exports.first = first;
exports.second = second;
exports.last = last;
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
exports.concat = concat;
exports.isEmpty = isEmpty;
exports.isNotEmpty = isNotEmpty;
exports.isOfLength = isOfLength;
exports.isShorterThan = isShorterThan;
exports.isLongerThan = isLongerThan;
exports.length = length;
exports.reverse = reverse;
exports.isOfLengthOne = void 0;

var _stringFunctions = require("./string-functions");

var _higherOrderFunctions = require("./higher-order-functions");

var _arrayFunctions = require("./array-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function nth(index) {
  return function (input) {
    return input[index];
  };
}

function head(input) {
  return input[0];
}

function tail(input) {
  var size = input.length - 1;
  var res = Array(size);

  for (var i = 0; i < size; i++) {
    res[i] = input[i + 1];
  }

  return res;
}

function headAndTail(input) {
  return [head(input), tail(input)];
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
  return [init(input), last(input)];
}

function first(predicateOrInput) {
  if ((0, _higherOrderFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      for (var i = 0; i < input.length; i++) {
        var item = input[i];

        if (predicateOrInput(item)) {
          return item;
        }
      }

      return null;
    };
  } else {
    return predicateOrInput[0];
  }
}

function second(input) {
  return input[1];
}

function last(predicateOrInput) {
  if ((0, _higherOrderFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      for (var i = input.length - 1; i >= 0; i--) {
        var item = input[i];

        if (predicateOrInput(item)) {
          return item;
        }
      }

      return null;
    };
  } else {
    return predicateOrInput[predicateOrInput.length - 1];
  }
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

function append(item) {
  return function (input) {
    return (0, _stringFunctions.isString)(input) ? input + item : [].concat(_toConsumableArray(input), [item]);
  };
}

function appendTo(input) {
  return function (item) {
    return (0, _stringFunctions.isString)(input) ? input + item : [].concat(_toConsumableArray(input), [item]);
  };
}

function prepend(item) {
  return function (input) {
    return (0, _stringFunctions.isString)(input) ? item + input : [item].concat(_toConsumableArray(input));
  };
}

function prependTo(input) {
  return function (item) {
    return (0, _stringFunctions.isString)(input) ? item + input : [item].concat(_toConsumableArray(input));
  };
}

function concat() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  if (items.length === 1) {
    var firstItem = items[0];

    if ((0, _arrayFunctions.isArray)(firstItem)) {
      // 2D array with a single item
      if (firstItem.length === 1) {
        return firstItem[0];
      } else {
        return concat.apply(void 0, _toConsumableArray(firstItem));
      }
    }
  }

  var initial = (0, _stringFunctions.isString)(items[0]) ? '' : [];
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

var isOfLengthOne = isOfLength(1);
exports.isOfLengthOne = isOfLengthOne;

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