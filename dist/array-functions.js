"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;
exports.flatten = flatten;
exports.partition = partition;
exports.groupBy = groupBy;
exports.groupEntriesBy = groupEntriesBy;
exports.chunk = chunk;
exports.splitAt = splitAt;
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
exports.indices = indices;
exports.lastIndex = lastIndex;
exports.slice = slice;
exports.count = count;

var _objectFunctions = require("./object-functions");

var _higherOrderFunctions = require("./higher-order-functions");

var _booleanFunctions = require("./boolean-functions");

var _typeFunctions = require("./type-functions");

var _lengthFunctions = require("./collections/length-functions");

var _mappingFunctions = require("./arrays/mapping-functions");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function forEach(f) {
  return function (arr) {
    arr.forEach(f);
  };
}

function flatten(arr) {
  return arr.flat();
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
    var deserializedGroupKeys = (0, _mappingFunctions.map)(deserializeKey)(groupKeys);
    return (0, _mappingFunctions.map)(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          deserialized = _ref2[1];

      return [deserialized, grouped[key]];
    })(zip(groupKeys, deserializedGroupKeys));
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
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
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
  var minimumLength = Math.min.apply(Math, _toConsumableArray((0, _mappingFunctions.map)(_lengthFunctions.length)(input)));
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
  var numberOfArrays = Math.min.apply(Math, _toConsumableArray((0, _mappingFunctions.map)(_lengthFunctions.length)(arr)));
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
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
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

function count(itemOrPredicate) {
  return function (arr) {
    var counter = 0;
    var predicate = (0, _typeFunctions.isFunction)(itemOrPredicate) ? itemOrPredicate : (0, _booleanFunctions.equals)(itemOrPredicate);

    var _iterator = _createForOfIteratorHelper(arr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (predicate(item)) {
          counter += 1;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return counter;
  };
}