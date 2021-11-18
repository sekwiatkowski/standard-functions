"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;
exports.flatten = flatten;
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

var _booleanFunctions = require("./boolean-functions");

var _typeFunctions = require("./type-functions");

var _lengthFunctions = require("./collections/length-functions");

var _joinFunctions = require("./arrays/join-functions");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function forEach(f) {
  return function (arr) {
    arr.forEach(f);
  };
}

function flatten(arr) {
  return arr.flat();
}

function zipObject(as) {
  return function (bs) {
    return (0, _objectFunctions.fromEntries)((0, _joinFunctions.zip)(as, bs));
  };
}

function arrayOf() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
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