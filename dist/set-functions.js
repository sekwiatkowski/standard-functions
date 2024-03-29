"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = unique;
exports.difference = difference;
exports.intersect = intersect;
exports.intersection = intersection;

var _lengthFunctions = require("./collections/length-functions");

var _typeFunctions = require("./type-functions");

var _aggregationFunctions = require("./arrays/aggregation-functions");

var _singleAccessFunctions = require("./collections/single-access-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function unique(arr) {
  return arr.filter(function (item, index) {
    return index === arr.indexOf(item);
  });
}

function difference(A) {
  return function (B) {
    return A.filter(function (a) {
      return !B.includes(a);
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

function intersection() {
  for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {
    sets[_key] = arguments[_key];
  }

  if ((0, _lengthFunctions.isSingle)(sets)) {
    var singleItem = (0, _singleAccessFunctions.single)(sets);

    if ((0, _typeFunctions.is2DArray)(singleItem)) {
      return intersection.apply(void 0, _toConsumableArray(singleItem));
    }
  }

  return (0, _aggregationFunctions.reduce)(function (acc, set) {
    return intersect(acc)(set);
  })(sets);
}