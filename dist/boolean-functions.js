"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = isBoolean;
exports.isFalse = isFalse;
exports.isTrue = isTrue;
exports.equals = equals;
exports.not = not;
exports.anyPass = anyPass;
exports.allPass = allPass;
exports.match = match;

var _arrayFunctions = require("./array-functions");

var _higherOrderFunctions = require("./higher-order-functions");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isBoolean(input) {
  return input === false || input === true;
}

function isFalse(input) {
  return input === false;
}

function isTrue(input) {
  return input === true;
}

function equals(a) {
  return function (b) {
    return a === b;
  };
}

function not(predicate) {
  return function (x) {
    return !predicate(x);
  };
}

function anyPass() {
  for (var _len = arguments.length, predicates = new Array(_len), _key = 0; _key < _len; _key++) {
    predicates[_key] = arguments[_key];
  }

  var firstItem = predicates[0];

  if ((0, _arrayFunctions.isArray)(firstItem)) {
    return anyPass.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (x) {
    for (var i = 0; i < predicates.length; i++) {
      if (predicates[i](x)) {
        return true;
      }
    }

    return false;
  };
}

function allPass() {
  for (var _len2 = arguments.length, predicates = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    predicates[_key2] = arguments[_key2];
  }

  var firstItem = predicates[0];

  if ((0, _arrayFunctions.isArray)(firstItem)) {
    return allPass.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (x) {
    for (var i = 0; i < predicates.length; i++) {
      if (!predicates[i](x)) {
        return false;
      }
    }

    return true;
  };
}

function match() {
  for (var _len3 = arguments.length, cases = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    cases[_key3] = arguments[_key3];
  }

  var firstItem = cases[0];

  if ((0, _arrayFunctions.is2DArray)(firstItem)) {
    return match.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (defaultFunctionOrValue) {
    return function (input) {
      var _iterator = _createForOfIteratorHelper(cases),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              condition = _step$value[0],
              valueOrFunction = _step$value[1];

          var isMatched = (0, _higherOrderFunctions.isFunction)(condition) && condition(input) || equals(condition)(input);

          if (isMatched) {
            if ((0, _higherOrderFunctions.isFunction)(valueOrFunction)) {
              return valueOrFunction(input);
            } else {
              return valueOrFunction;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if ((0, _higherOrderFunctions.isFunction)(defaultFunctionOrValue)) {
        return defaultFunctionOrValue(input);
      } else {
        return defaultFunctionOrValue;
      }
    };
  };
}