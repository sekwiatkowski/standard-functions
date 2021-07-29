"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.is2DArray = is2DArray;
exports.forEach = forEach;
exports.map = map;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.filter = filter;
exports.exclude = exclude;
exports.fold = fold;
exports.foldWhile = foldWhile;
exports.unique = unique;
exports.difference = difference;
exports.find = find;
exports.findIndex = findIndex;
exports.indexOf = indexOf;
exports.single = single;
exports.singleIndex = singleIndex;
exports.partition = partition;
exports.groupBy = groupBy;
exports.minBy = minBy;
exports.maxBy = maxBy;
exports.chunk = chunk;
exports.splitAt = splitAt;
exports.contains = contains;
exports.isContainedIn = isContainedIn;
exports.containsAll = containsAll;
exports.areContainedIn = areContainedIn;
exports.all = all;
exports.any = any;
exports.cartesianProduct = cartesianProduct;
exports.zip = zip;
exports.unzip = unzip;
exports.zipObject = zipObject;
exports.arrayOf = arrayOf;
exports.range = range;
exports.steps = steps;
exports.fill = fill;
exports.repeat = repeat;
exports.update = update;
exports.updateBy = updateBy;
exports.removeFirst = removeFirst;
exports.remove = remove;
exports.removeAt = removeAt;
exports.indices = indices;
exports.slice = slice;
exports.min = min;
exports.max = max;

var _stringOrArrayFunctions = require("./string-or-array-functions");

var _objectFunctions = require("./object-functions");

var _higherOrderFunctions = require("./higher-order-functions");

var _booleanFunctions = require("./boolean-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isArray(input) {
  return Array.isArray(input);
}

function is2DArray(input) {
  return isArray(input) && isArray(input[0]);
}

function forEach(f) {
  return function (arr) {
    arr.forEach(f);
  };
}

function map(f) {
  return function (arr) {
    return arr.map(f);
  };
}

function flatMap(f) {
  return function (arr) {
    return arr.flatMap(f);
  };
}

function flatten(arr) {
  return arr.flat();
}

function filter(predicate) {
  return function (arr) {
    return arr.filter(predicate);
  };
}

function exclude(predicate) {
  return function (arr) {
    return arr.filter((0, _booleanFunctions.not)(predicate));
  };
}

function fold(f) {
  return function (initialValue) {
    return function (arr) {
      var acc = initialValue;

      for (var i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i);
      }

      return acc;
    };
  };
}

function foldWhile(predicate) {
  return function (f) {
    return function (initialValue) {
      return function (arr) {
        var acc = initialValue;

        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          acc = f(acc, item);

          if (!predicate(acc, item)) {
            return acc;
          }
        }

        return acc;
      };
    };
  };
}

function unique(arr) {
  return arr.filter(function (item, index) {
    return index === arr.indexOf(item);
  });
}

function difference(as) {
  return function (bs) {
    return as.filter(function (a) {
      return !bs.includes(a);
    });
  };
}

function find(predicate) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      if (predicate(item)) {
        return item;
      }
    }

    return null;
  };
}

function findIndex(predicate) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        return i;
      }
    }

    return null;
  };
}

function indexOf(item) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        return i;
      }
    }

    return null;
  };
}

function single(predicateOrInput) {
  if ((0, _higherOrderFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      var results = input.filter(predicateOrInput);
      var numberOfResults = results.length;

      if (numberOfResults === 0) {
        throw Error("Expected a single search result. Found no matching items.");
      } else if (numberOfResults > 1) {
        throw Error("Expected a single search result. Found ".concat(numberOfResults, " matching items."));
      }

      return results[0];
    };
  } else {
    var numberOfItems = predicateOrInput.length;

    if (numberOfItems === 0) {
      throw Error("Expected a single item. Found no items.");
    } else if (numberOfItems > 1) {
      throw Error("Expected a single item. Found ".concat(numberOfItems, " items."));
    }

    return predicateOrInput[0];
  }
}

function singleIndex(predicate) {
  return function (arr) {
    var matches = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        matches.push(i);
      }
    }

    var numberOfResults = matches.length;

    if (numberOfResults === 0) {
      throw Error("Expected a single search result. Found no ".concat(numberOfResults, " matching items."));
    } else if (numberOfResults > 1) {
      throw Error("Expected a single search result. Found ".concat(numberOfResults, " matching items."));
    }

    return matches[0];
  };
}

function partition(predicate) {
  return function (arr) {
    var positive = [];
    var negative = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      var _partition = predicate(item) ? positive : negative;

      _partition.push(item);
    }

    return [positive, negative];
  };
}

function groupBy(computeKey) {
  return function (arr) {
    var groups = {};

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      var key = computeKey(item);

      if (!groups.hasOwnProperty(key)) {
        groups[key] = [item];
      } else {
        groups[key].push(item);
      }
    }

    return groups;
  };
}

function minBy(f) {
  return function (arr) {
    var lowestScore = Number.POSITIVE_INFINITY;
    var index = -1;

    for (var i = 0; i < arr.length; i++) {
      var score = f(arr[i]);

      if (score < lowestScore) {
        lowestScore = score;
        index = i;
      }
    }

    return arr[index];
  };
}

function maxBy(f) {
  return function (arr) {
    var highestScore = Number.NEGATIVE_INFINITY;
    var index = -1;

    for (var i = 0; i < arr.length; i++) {
      var score = f(arr[i]);

      if (score > highestScore) {
        highestScore = score;
        index = i;
      }
    }

    return arr[index];
  };
}

function chunk(size) {
  return function (arr) {
    var chunks = [];
    var i = 0;

    while (i < arr.length) {
      var _chunk = [];

      for (var step = 0; step < size; step++) {
        _chunk.push(arr[i]);

        i++;
      }

      chunks.push(_chunk);
    }

    return chunks;
  };
}

function splitAt(position) {
  return function (arr) {
    return [arr.slice(0, position), arr.slice(position)];
  };
}

function contains(itemOrPredicate) {
  return function () {
    for (var _len = arguments.length, itemsOrArray = new Array(_len), _key = 0; _key < _len; _key++) {
      itemsOrArray[_key] = arguments[_key];
    }

    if ((0, _stringOrArrayFunctions.isOfLengthOne)(itemsOrArray)) {
      var firstItem = (0, _stringOrArrayFunctions.first)(itemsOrArray);

      if (isArray(firstItem)) {
        return contains(itemOrPredicate).apply(void 0, _toConsumableArray(firstItem));
      }
    }

    return (0, _higherOrderFunctions.isFunction)(itemOrPredicate) ? findIndex(itemOrPredicate)(itemsOrArray) !== null : itemsOrArray.includes(itemOrPredicate);
  };
}

function isContainedIn() {
  for (var _len2 = arguments.length, itemsOrArray = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    itemsOrArray[_key2] = arguments[_key2];
  }

  return function (itemOrPredicate) {
    if ((0, _stringOrArrayFunctions.isOfLengthOne)(itemsOrArray)) {
      var firstItem = (0, _stringOrArrayFunctions.first)(itemsOrArray);

      if (isArray(firstItem)) {
        return contains(itemOrPredicate)(firstItem);
      }
    }

    return contains(itemOrPredicate).apply(void 0, itemsOrArray);
  };
}

function containsAll() {
  for (var _len3 = arguments.length, candidateItemsOrArray = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    candidateItemsOrArray[_key3] = arguments[_key3];
  }

  if ((0, _stringOrArrayFunctions.isOfLengthOne)(candidateItemsOrArray)) {
    var firstCandidateItem = (0, _stringOrArrayFunctions.first)(candidateItemsOrArray);

    if (isArray(firstCandidateItem)) {
      return containsAll.apply(void 0, _toConsumableArray(firstCandidateItem));
    }
  }

  return function () {
    for (var _len4 = arguments.length, itemsOrArray = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      itemsOrArray[_key4] = arguments[_key4];
    }

    if ((0, _stringOrArrayFunctions.isOfLengthOne)(itemsOrArray)) {
      var firstItem = (0, _stringOrArrayFunctions.first)(itemsOrArray);

      if (isArray(firstItem)) {
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

function all(p) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (!p(arr[i])) {
        return false;
      }
    }

    return true;
  };
}

function any(p) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (p(arr[i])) {
        return true;
      }
    }

    return false;
  };
}

function cartesianProduct(as) {
  return function (bs) {
    var aLength = as.length;
    var bLength = bs.length;
    var product = new Array(aLength * bLength);

    for (var i = 0; i < aLength; i++) {
      for (var j = 0; j < bLength; j++) {
        product[i * bLength + j] = [as[i], bs[j]];
      }
    }

    return product;
  };
}

function zip() {
  for (var _len5 = arguments.length, input = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    input[_key5] = arguments[_key5];
  }

  // zip([ arr_1, ..., arr_n ])
  if ((0, _stringOrArrayFunctions.isOfLengthOne)(input)) {
    var arrayOfArrays = input[0]; /// zip([ arr_1 ])

    if (!(0, _stringOrArrayFunctions.isOfLengthOne)(arrayOfArrays)) {
      return arrayOfArrays[0];
    } else {
      return zip.apply(void 0, input);
    }
  }

  var numberOArrays = input.length;
  var minimumLength = Math.min.apply(Math, _toConsumableArray(map(_stringOrArrayFunctions.length)(input)));
  var result = new Array(minimumLength);

  for (var indexItem = 0; indexItem < minimumLength; indexItem++) {
    var zippedItem = new Array(numberOArrays);

    for (var indexInput = 0; indexInput < numberOArrays; indexInput++) {
      zippedItem[indexInput] = input[indexInput][indexItem];
    }

    result[indexItem] = zippedItem;
  }

  return result;
}

function unzip(arr) {
  var numberOfItems = arr.length;
  var numberOfArrays = Math.min.apply(Math, _toConsumableArray(map(_stringOrArrayFunctions.length)(arr)));
  var result = Array(numberOfArrays);

  for (var indexArray = 0; indexArray < numberOfArrays; indexArray++) {
    result[indexArray] = Array(numberOfItems);
  }

  for (var _indexArray = 0; _indexArray < numberOfArrays; _indexArray++) {
    var resultArray = result[_indexArray];

    for (var indexItem = 0; indexItem < numberOfItems; indexItem++) {
      resultArray[indexItem] = arr[indexItem][_indexArray];
    }
  }

  return result;
}

function zipObject(as) {
  return function (bs) {
    return (0, _objectFunctions.fromEntries)(zip(as, bs));
  };
}

function arrayOf() {
  for (var _len6 = arguments.length, values = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    values[_key6] = arguments[_key6];
  }

  return values;
}

function range(inclusiveStart) {
  return function (exclusiveEnd) {
    return steps(inclusiveStart)(exclusiveEnd)(1);
  };
}

function steps(inclusiveStart) {
  return function (exclusiveEnd) {
    return function (stepSize) {
      var size = Math.ceil((exclusiveEnd - inclusiveStart) / stepSize);
      var result = Array(size);

      for (var i = 0, current = inclusiveStart; i < size; i++, current += stepSize) {
        result[i] = current;
      }

      return result;
    };
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

function repeat(n) {
  return function (f) {
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = f(i);
    }

    return result;
  };
}

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

function removeFirst(item) {
  return function (arr) {
    var index = indexOf(item)(arr);
    return removeAt(index)(arr);
  };
}

function remove(item) {
  return function (arr) {
    var copy = arr.slice();
    var i = copy.length - 1;

    while (i >= 0) {
      if (copy[i] === item) {
        copy.splice(i, 1);
      } else {
        i--;
      }
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

function indices(arr) {
  var n = arr.length;
  var result = Array(n);

  for (var i = 0; i < n; i++) {
    result[i] = i;
  }

  return result;
}

function slice(indices) {
  return function (arr) {
    var n = (0, _stringOrArrayFunctions.length)(indices);
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = arr[indices[i]];
    }

    return result;
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