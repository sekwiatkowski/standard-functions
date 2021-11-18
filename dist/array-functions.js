"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;
exports.map = map;
exports.mapNotNull = mapNotNull;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.filter = filter;
exports.filterIndices = filterIndices;
exports.exclude = exclude;
exports.excludeNull = excludeNull;
exports.fold = fold;
exports.foldWhile = foldWhile;
exports.reduce = reduce;
exports.unique = unique;
exports.difference = difference;
exports.intersect = intersect;
exports.find = find;
exports.findIndex = findIndex;
exports.indexOf = indexOf;
exports.singleIndex = singleIndex;
exports.partition = partition;
exports.groupBy = groupBy;
exports.groupEntriesBy = groupEntriesBy;
exports.minBy = minBy;
exports.maxBy = maxBy;
exports.chunk = chunk;
exports.splitAt = splitAt;
exports.contains = contains;
exports.isContainedIn = isContainedIn;
exports.doesNotContain = doesNotContain;
exports.isNotContainedIn = isNotContainedIn;
exports.containsAll = containsAll;
exports.areContainedIn = areContainedIn;
exports.cartesianProduct = cartesianProduct;
exports.zip = zip;
exports.unzip = unzip;
exports.zipObject = zipObject;
exports.arrayOf = arrayOf;
exports.range = range;
exports.inclusiveRange = inclusiveRange;
exports.steps = steps;
exports.inclusiveSteps = inclusiveSteps;
exports.fill = fill;
exports.loop = loop;
exports.indices = indices;
exports.lastIndex = lastIndex;
exports.slice = slice;
exports.containsSublist = containsSublist;
exports.isSublistOf = isSublistOf;
exports.swap = swap;
exports.sort = sort;
exports.sortDescendingly = sortDescendingly;
exports.sortBy = sortBy;
exports.sortDescendinglyBy = sortDescendinglyBy;
exports.count = count;
exports.intersperse = intersperse;

var _objectFunctions = require("./object-functions");

var _higherOrderFunctions = require("./higher-order-functions");

var _booleanFunctions = require("./boolean-functions");

var _typeFunctions = require("./type-functions");

var _singleAccessFunctions = require("./collections/single-access-functions");

var _lengthFunctions = require("./collections/length-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function flatten(arr) {
  return arr.flat();
}

function filter(predicate) {
  return function (arr) {
    return arr.filter(predicate);
  };
}

function filterIndices(predicate) {
  return function (arr) {
    var indices = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        indices.push(i);
      }
    }

    return indices;
  };
}

function exclude(predicate) {
  return function (arr) {
    return arr.filter((0, _booleanFunctions.not)(predicate));
  };
}

function excludeNull(input) {
  if ((0, _lengthFunctions.isSingle)(arguments)) {
    if ((0, _typeFunctions.isNull)(input)) {
      return [];
    } else if ((0, _typeFunctions.isArray)(input)) {
      return exclude(_typeFunctions.isNull)(input);
    } else {
      return [input];
    }
  } else {
    return excludeNull(Array.prototype.slice.call(arguments));
  }
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

function reduce(f) {
  return function (arr) {
    var acc = arr[0];

    for (var i = 1; i < arr.length; i++) {
      acc = f(acc, arr[i], i);
    }

    return acc;
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

function intersect(A) {
  return function (B) {
    var uniqueA = unique(A);
    var uniqueB = unique(B);
    var result = [];

    var _iterator = _createForOfIteratorHelper(uniqueA),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var a = _step.value;

        var _iterator2 = _createForOfIteratorHelper(uniqueB),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var b = _step2.value;

            if (a === b) {
              result.push(a);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
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

function groupEntriesBy(computeKey) {
  var deserializeKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _higherOrderFunctions.identity;
  return function (arr) {
    var grouped = groupBy(computeKey)(arr);
    var groupKeys = (0, _objectFunctions.keys)(grouped);
    var deserializedGroupKeys = map(deserializeKey)(groupKeys);
    return map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          deserialized = _ref2[1];

      return [deserialized, grouped[key]];
    })(zip(groupKeys, deserializedGroupKeys));
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

function contains(item) {
  return function (arr) {
    return (0, _booleanFunctions.some)((0, _booleanFunctions.equals)(item))(arr);
  };
}

function isContainedIn(arr) {
  return function (item) {
    return contains(item)(arr);
  };
}

function doesNotContain(item) {
  return function (arr) {
    return (0, _booleanFunctions.none)((0, _booleanFunctions.equals)(item))(arr);
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
  for (var _len3 = arguments.length, input = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    input[_key3] = arguments[_key3];
  }

  // zip([ arr_1, ..., arr_n ])
  if ((0, _lengthFunctions.isSingle)(input)) {
    var arrayOfArrays = input[0]; /// zip([ arr_1 ])

    if (!(0, _lengthFunctions.isSingle)(arrayOfArrays)) {
      return arrayOfArrays[0];
    } else {
      return zip.apply(void 0, input);
    }
  }

  var numberOArrays = input.length;
  var minimumLength = Math.min.apply(Math, _toConsumableArray(map(_lengthFunctions.length)(input)));
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
  var numberOfArrays = Math.min.apply(Math, _toConsumableArray(map(_lengthFunctions.length)(arr)));
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
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }

  return values;
}

function range(inclusiveStart) {
  return function (exclusiveEnd) {
    return steps(inclusiveStart)(exclusiveEnd)(1);
  };
}

function inclusiveRange(inclusiveStart) {
  return function (inclusiveEnd) {
    return range(inclusiveStart)(inclusiveEnd + 1);
  };
}

function steps(inclusiveStart) {
  return function (exclusiveEnd) {
    return function (stepSize) {
      var size = Math.ceil((exclusiveEnd - inclusiveStart) / stepSize);

      if (size < 1) {
        return [];
      }

      var result = Array(size);

      for (var i = 0, current = inclusiveStart; i < size; i++, current += stepSize) {
        result[i] = current;
      }

      return result;
    };
  };
}

function inclusiveSteps(inclusiveStart) {
  return function (inclusiveEnd) {
    return function (stepSize) {
      return steps(inclusiveStart)(inclusiveEnd + 1)(stepSize);
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

function loop(n) {
  return function (f) {
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = f(i);
    }

    return result;
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

function lastIndex(arr) {
  return arr.length - 1;
}

function slice(indices) {
  return function (arr) {
    var n = (0, _lengthFunctions.length)(indices);
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = arr[indices[i]];
    }

    return result;
  };
}

function containsSublist(sublist) {
  return function (arr) {
    var _iterator3 = _createForOfIteratorHelper(sublist),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;

        if (!arr.includes(item)) {
          return false;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return true;
  };
}

function isSublistOf(arr) {
  return function (sublist) {
    return containsSublist(sublist)(arr);
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

function sort(arr) {
  var copy = arr.slice();

  if ((0, _lengthFunctions.isEmpty)(arr)) {
    return copy;
  }

  if ((0, _typeFunctions.isNumber)(arr[0])) {
    return copy.sort(function (a, b) {
      return a - b;
    });
  }

  return copy.sort();
}

function sortDescendingly(arr) {
  var copy = arr.slice();

  if ((0, _lengthFunctions.isEmpty)(arr)) {
    return copy;
  }

  if ((0, _typeFunctions.isNumber)(arr[0])) {
    return copy.sort(function (a, b) {
      return -(a - b);
    });
  }

  return copy.sort(function (a, b) {
    return a > b ? -1 : 1;
  });
}

function sortBy(f) {
  return function (arr) {
    return arr.slice().sort(function (a, b) {
      return f(a) - f(b);
    });
  };
}

function sortDescendinglyBy(f) {
  return function (arr) {
    return arr.slice().sort(function (a, b) {
      return -(f(a) - f(b));
    });
  };
}

function count(itemOrPredicate) {
  return function (arr) {
    var counter = 0;
    var predicate = (0, _typeFunctions.isFunction)(itemOrPredicate) ? itemOrPredicate : (0, _booleanFunctions.equals)(itemOrPredicate);

    var _iterator4 = _createForOfIteratorHelper(arr),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var item = _step4.value;

        if (predicate(item)) {
          counter += 1;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return counter;
  };
}

function intersperse(interspersion) {
  return function (arr) {
    if ((0, _lengthFunctions.isEmpty)(arr) || (0, _lengthFunctions.isOfLength)(1)(arr)) {
      return _toConsumableArray(arr);
    }

    var arrLength = (0, _lengthFunctions.length)(arr);
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