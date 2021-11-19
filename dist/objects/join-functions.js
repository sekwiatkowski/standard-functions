"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;
exports.mergeWith = mergeWith;
exports.extend = extend;
exports.extendWith = extendWith;
exports.zipObject = zipObject;

var _lengthFunctions = require("../collections/length-functions");

var _singleAccessFunctions = require("../collections/single-access-functions");

var _typeFunctions = require("../type-functions");

var _aggregationFunctions = require("../arrays/aggregation-functions");

var _joinFunctions = require("../arrays/join-functions");

var _creationFunctions = require("./creation-functions");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function merge() {
  for (var _len = arguments.length, firstOrArray = new Array(_len), _key = 0; _key < _len; _key++) {
    firstOrArray[_key] = arguments[_key];
  }

  if ((0, _lengthFunctions.isSingle)(firstOrArray)) {
    var singleItem = (0, _singleAccessFunctions.single)(firstOrArray);

    if ((0, _typeFunctions.isNull)(singleItem) || (0, _typeFunctions.isUndefined)(singleItem)) {
      return {};
    } else if ((0, _typeFunctions.isArray)(singleItem)) {
      return merge.apply(void 0, _toConsumableArray(singleItem));
    } else if ((0, _typeFunctions.isObject)(singleItem)) {
      return singleItem;
    } else {
      throw Error("Expected either an array, an object, null or undefined. Received: ".concat(singleItem));
    }
  } else {
    return (0, _aggregationFunctions.fold)(function (acc, obj) {
      return (0, _typeFunctions.isNull)(obj) || (0, _typeFunctions.isUndefined)(obj) ? acc : _objectSpread(_objectSpread({}, acc), obj);
    })({})(firstOrArray);
  }
}

function mergeWith(f) {
  return function () {
    for (var _len2 = arguments.length, firstOrArray = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      firstOrArray[_key2] = arguments[_key2];
    }

    if ((0, _lengthFunctions.isSingle)(firstOrArray)) {
      var singleItem = (0, _singleAccessFunctions.single)(firstOrArray);

      if ((0, _typeFunctions.isArray)(singleItem)) {
        return mergeWith(f).apply(void 0, _toConsumableArray(singleItem));
      } else if ((0, _typeFunctions.isObject)(singleItem)) {
        return singleItem;
      } else if ((0, _typeFunctions.isNull)(singleItem) || (0, _typeFunctions.isUndefined)(singleItem)) {
        return {};
      } else {
        throw Error("Expected either an array, an object, null or undefined. Received: ".concat(singleItem));
      }
    } else {
      return (0, _aggregationFunctions.fold)(function (acc, item) {
        if ((0, _typeFunctions.isNull)(item) || (0, _typeFunctions.isUndefined)(item)) {
          return acc;
        }

        var merged = _objectSpread({}, acc);

        for (var _i = 0, _Object$entries = Object.entries(item); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              itemKey = _Object$entries$_i[0],
              itemValue = _Object$entries$_i[1];

          merged[itemKey] = acc.hasOwnProperty(itemKey) ? f(acc[itemKey])(itemValue) : itemValue;
        }

        return merged;
      })({})(firstOrArray);
    }
  };
}

function extend(b) {
  return function (a) {
    return _objectSpread(_objectSpread({}, a), b !== null && b !== void 0 ? b : {});
  };
}

function extendWith(f) {
  return function (b) {
    return function (a) {
      var definiteB = b !== null && b !== void 0 ? b : {};

      var result = _objectSpread({}, a);

      for (var _i2 = 0, _Object$entries2 = Object.entries(definiteB); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        result[key] = result.hasOwnProperty(key) ? f(result[key])(value) : value;
      }

      return result;
    };
  };
}

function zipObject(as) {
  return function (bs) {
    return (0, _creationFunctions.fromEntries)((0, _joinFunctions.zip)(as, bs));
  };
}