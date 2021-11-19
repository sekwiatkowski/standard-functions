"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapKeys = mapKeys;
exports.mapValues = mapValues;
exports.mapEntries = mapEntries;
exports.mapObject = mapObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function mapKeys(f) {
  return function (obj) {
    var result = {};
    var keys = Object.keys(obj);

    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];
      result[f(key)] = obj[key];
    }

    return result;
  };
}

function mapValues(f) {
  return function (obj) {
    var result = {};
    var keys = Object.keys(obj);

    for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
      var key = _keys2[_i2];
      var value = obj[key];
      result[key] = f(value);
    }

    return result;
  };
}

function mapEntries(f) {
  return function (obj) {
    var entries = Object.entries(obj);
    var numberOfEntries = entries.length;
    var result = Array(numberOfEntries);

    for (var index = 0; index < numberOfEntries; index++) {
      var _entries$index = _slicedToArray(entries[index], 2),
          key = _entries$index[0],
          value = _entries$index[1];

      result[index] = f([key, value]);
    }

    return result;
  };
}

function mapObject(f) {
  return function (obj) {
    var result = {};
    var entries = Object.entries(obj);

    for (var _i3 = 0, _entries = entries; _i3 < _entries.length; _i3++) {
      var entry = _entries[_i3];

      var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];

      result[key] = f([key, value]);
    }

    return result;
  };
}