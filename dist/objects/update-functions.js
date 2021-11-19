"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProperty = setProperty;
exports.reverseObject = reverseObject;

var _typeFunctions = require("../type-functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setProperty(key) {
  return function (valueOrFunction) {
    return function (obj) {
      return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, (0, _typeFunctions.isFunction)(valueOrFunction) ? valueOrFunction(obj[key]) : valueOrFunction));
    };
  };
}

function reverseObject(input) {
  var reversed = {};
  var entries = Object.entries(input);

  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var entry = _entries[_i];
    reversed[entry[1]] = entry[0];
  }

  return reversed;
}