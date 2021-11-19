"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fold = fold;
exports.foldWhile = foldWhile;
exports.reduce = reduce;
exports.countBy = countBy;
exports.countIf = countIf;
exports.countOf = countOf;
exports.min = min;
exports.minBy = minBy;
exports.max = max;
exports.maxBy = maxBy;
exports.sumBy = sumBy;
exports.productBy = productBy;
exports.product = exports.sum = exports.count = void 0;

var _equalityFunctions = require("../booleans/equality-functions");

var _higherOrderFunctions = require("../higher-order-functions");

var _typeFunctions = require("../type-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var count = countBy(_higherOrderFunctions.identity);
exports.count = count;

function countBy(f) {
  return function (arr) {
    var counts = {};

    var _iterator = _createForOfIteratorHelper(arr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var key = f(item);
        var currentCount = (0, _typeFunctions.defaultValue)(0)(counts[key]);
        counts[key] += currentCount + 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return counts;
  };
}

function countIf(predicate) {
  return function (arr) {
    var counter = 0;

    var _iterator2 = _createForOfIteratorHelper(arr),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (predicate(item)) {
          counter += 1;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return counter;
  };
}

function countOf(value) {
  return function (arr) {
    return countIf((0, _equalityFunctions.equals)(value))(arr);
  };
}

function min(arr) {
  if (arguments.length > 1) {
    return min(Array.prototype.slice.call(arguments));
  }

  return Math.min.apply(Math, _toConsumableArray(arr));
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

function max(arr) {
  if (arguments.length > 1) {
    return max(Array.prototype.slice.call(arguments));
  }

  return Math.max.apply(Math, _toConsumableArray(arr));
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

function sumBy(f) {
  return function (xs) {
    return fold(function (acc, x) {
      return acc + f(x);
    })(0)(xs);
  };
}

var sum = sumBy(_higherOrderFunctions.identity);
exports.sum = sum;

function productBy(f) {
  return function (xs) {
    return fold(function (acc, x) {
      return acc * f(x);
    })(1)(xs);
  };
}

var product = productBy(_higherOrderFunctions.identity);
exports.product = product;