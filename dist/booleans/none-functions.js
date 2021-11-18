"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.none = none;
exports.allFail = allFail;
exports.allFalse = void 0;

var _typeFunctions = require("../type-functions");

var _allFunctions = require("./all-functions");

var _booleanFunctions = require("../boolean-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function none(predicate) {
  return function () {
    for (var _len = arguments.length, itemsOrArray = new Array(_len), _key = 0; _key < _len; _key++) {
      itemsOrArray[_key] = arguments[_key];
    }

    var items = itemsOrArray.length === 1 && (0, _typeFunctions.isArray)(itemsOrArray[0]) ? itemsOrArray[0] : itemsOrArray;

    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (predicate(item)) {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  };
}

var allFalse = (0, _allFunctions.all)(_booleanFunctions.isFalse);
exports.allFalse = allFalse;

function allFail() {
  for (var _len2 = arguments.length, predicates = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    predicates[_key2] = arguments[_key2];
  }

  var firstItem = predicates[0];

  if ((0, _typeFunctions.isArray)(firstItem)) {
    return _allFunctions.allPass.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (items) {
    for (var i = 0; i < predicates.length; i++) {
      if (predicates[i](items)) {
        return false;
      }
    }

    return true;
  };
}