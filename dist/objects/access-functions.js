"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.property = property;
exports.propertyOf = propertyOf;
exports.properties = properties;
exports.propertiesOf = propertiesOf;
exports.omit = omit;
exports.pick = pick;
exports.pickAll = pickAll;

var _lengthFunctions = require("../collections/length-functions");

var _singleAccessFunctions = require("../collections/single-access-functions");

var _typeFunctions = require("../type-functions");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function keys(obj) {
  return Object.keys(obj);
}

function values(obj) {
  return Object.values(obj);
}

function entries(obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
}

function property(key, defaultValue) {
  return function (obj) {
    return obj.hasOwnProperty(key) ? obj[key] : defaultValue;
  };
}

function propertyOf(obj, defaultValue) {
  return function (key) {
    return property(key, defaultValue)(obj);
  };
}

function properties() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return function (obj) {
    if ((0, _lengthFunctions.isSingle)(keys)) {
      var singleItem = (0, _singleAccessFunctions.single)(keys);

      if ((0, _typeFunctions.isArray)(singleItem)) {
        return properties.apply(void 0, _toConsumableArray(singleItem))(obj);
      }
    }

    var result = [];

    for (var i = 0; i < keys.length; i++) {
      result[i] = obj[keys[i]];
    }

    return result;
  };
}

function propertiesOf(obj) {
  return function (keys) {
    return properties(keys)(obj);
  };
}

function omit() {
  for (var _len2 = arguments.length, omittedKeys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    omittedKeys[_key2] = arguments[_key2];
  }

  if ((0, _lengthFunctions.isSingle)(omittedKeys)) {
    var firstItem = (0, _singleAccessFunctions.first)(omittedKeys);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return omit.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return function (obj) {
    var partialObject = {};
    var keys = Object.keys(obj);

    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];

      if (!omittedKeys.includes(key)) {
        partialObject[key] = obj[key];
      }
    }

    return partialObject;
  };
}

function pick() {
  for (var _len3 = arguments.length, keys = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    keys[_key3] = arguments[_key3];
  }

  if ((0, _lengthFunctions.isSingle)(keys)) {
    var firstItem = (0, _singleAccessFunctions.first)(keys);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return pick.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return function (obj) {
    var partialObject = {};

    var _iterator = _createForOfIteratorHelper(keys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;

        if (obj.hasOwnProperty(key)) {
          partialObject[key] = obj[key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return partialObject;
  };
}

function pickAll() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  if ((0, _lengthFunctions.isSingle)(keys)) {
    var firstItem = (0, _singleAccessFunctions.first)(keys);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return pick.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return function (obj) {
    var partialObject = {};

    var _iterator2 = _createForOfIteratorHelper(keys),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var key = _step2.value;
        partialObject[key] = obj[key];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return partialObject;
  };
}