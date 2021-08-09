"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.apply = apply;
exports.applyTo = applyTo;
exports.applyPair = applyPair;
exports.applyPairTo = applyPairTo;
exports.compose = compose;
exports.identity = identity;
exports.constant = constant;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isFunction(input) {
  return typeof input === 'function';
}

function apply(arg) {
  return function (f) {
    return f(arg);
  };
}

function applyTo(f) {
  return function (x) {
    return f(x);
  };
}

function applyPair(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  return function (f) {
    return f(a)(b);
  };
}

function applyPairTo(f) {
  return function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        a = _ref4[0],
        b = _ref4[1];

    return f(a)(b);
  };
}

function compose() {
  var arr = Array.prototype.slice.call(arguments);
  return function (x) {
    return arr.reduce(function (acc, f) {
      return f(acc);
    }, x);
  };
}

function identity(x) {
  return x;
}

function constant(x) {
  return function () {
    return x;
  };
}