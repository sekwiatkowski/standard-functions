"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = isFalse;
exports.isTrue = isTrue;
exports.equals = equals;
exports.doesNotEqual = doesNotEqual;
exports.isGreaterThan = isGreaterThan;
exports.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
exports.isLessThan = isLessThan;
exports.isLessThanOrEqualTo = isLessThanOrEqualTo;
exports.not = not;
exports.negate = negate;
exports.all = all;
exports.some = some;
exports.none = none;
exports.allPass = allPass;
exports.allFail = allFail;
exports.somePass = somePass;
exports.alwaysTrue = alwaysTrue;
exports.alwaysFalse = alwaysFalse;
exports.match = match;
exports.someTrue = exports.allTrue = void 0;

var _typeFunctions = require("./type-functions");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function doesNotEqual(a) {
  return function (b) {
    return a !== b;
  };
}

function isGreaterThan(a) {
  return function (b) {
    return b > a;
  };
}

function isGreaterThanOrEqualTo(a) {
  return function (b) {
    return b >= a;
  };
}

function isLessThan(a) {
  return function (b) {
    return b < a;
  };
}

function isLessThanOrEqualTo(a) {
  return function (b) {
    return b <= a;
  };
}

function not(predicate) {
  return function (x) {
    return !predicate(x);
  };
}

function negate(value) {
  return !value;
}

function all(predicate) {
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

        if (!predicate(item)) {
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

var allTrue = all(isTrue);
exports.allTrue = allTrue;

function some(predicate) {
  return function () {
    for (var _len2 = arguments.length, itemsOrArray = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      itemsOrArray[_key2] = arguments[_key2];
    }

    var items = itemsOrArray.length === 1 && (0, _typeFunctions.isArray)(itemsOrArray[0]) ? itemsOrArray[0] : itemsOrArray;

    var _iterator2 = _createForOfIteratorHelper(items),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;

        if (predicate(item)) {
          return true;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return false;
  };
}

var someTrue = some(isTrue);
exports.someTrue = someTrue;

function none(predicate) {
  return function () {
    for (var _len3 = arguments.length, itemsOrArray = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      itemsOrArray[_key3] = arguments[_key3];
    }

    var items = itemsOrArray.length === 1 && (0, _typeFunctions.isArray)(itemsOrArray[0]) ? itemsOrArray[0] : itemsOrArray;

    var _iterator3 = _createForOfIteratorHelper(items),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;

        if (predicate(item)) {
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

function allPass() {
  for (var _len4 = arguments.length, predicates = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    predicates[_key4] = arguments[_key4];
  }

  var firstItem = predicates[0];

  if ((0, _typeFunctions.isArray)(firstItem)) {
    return allPass.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (items) {
    for (var i = 0; i < predicates.length; i++) {
      if (!predicates[i](items)) {
        return false;
      }
    }

    return true;
  };
}

function allFail() {
  for (var _len5 = arguments.length, predicates = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    predicates[_key5] = arguments[_key5];
  }

  var firstItem = predicates[0];

  if ((0, _typeFunctions.isArray)(firstItem)) {
    return allPass.apply(void 0, _toConsumableArray(firstItem));
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

function somePass() {
  for (var _len6 = arguments.length, predicates = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    predicates[_key6] = arguments[_key6];
  }

  var firstItem = predicates[0];

  if ((0, _typeFunctions.isArray)(firstItem)) {
    return somePass.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (items) {
    for (var i = 0; i < predicates.length; i++) {
      if (predicates[i](items)) {
        return true;
      }
    }

    return false;
  };
}

function alwaysTrue() {
  return true;
}

function alwaysFalse() {
  return false;
}

function match() {
  for (var _len7 = arguments.length, cases = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    cases[_key7] = arguments[_key7];
  }

  var firstItem = cases[0];

  if ((0, _typeFunctions.is2DArray)(firstItem)) {
    return match.apply(void 0, _toConsumableArray(firstItem));
  }

  return function (defaultFunctionOrValue) {
    return function (input) {
      var _iterator4 = _createForOfIteratorHelper(cases),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              condition = _step4$value[0],
              valueOrFunction = _step4$value[1];

          var isMatched = (0, _typeFunctions.isFunction)(condition) && condition(input) || equals(condition)(input);

          if (isMatched) {
            if ((0, _typeFunctions.isFunction)(valueOrFunction)) {
              return valueOrFunction(input);
            } else {
              return valueOrFunction;
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if ((0, _typeFunctions.isFunction)(defaultFunctionOrValue)) {
        return defaultFunctionOrValue(input);
      } else {
        return defaultFunctionOrValue;
      }
    };
  };
}