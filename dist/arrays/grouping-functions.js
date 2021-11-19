"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;
exports.groupBy = groupBy;
exports.groupEntriesBy = groupEntriesBy;
exports.chunk = chunk;
exports.splitAt = splitAt;

var _higherOrderFunctions = require("../higher-order-functions");

var _mappingFunctions = require("./mapping-functions");

var _joinFunctions = require("./join-functions");

var _accessFunctions = require("../objects/access-functions");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function partition(predicate) {
  return function (arr) {
    var positive = [];
    var negative = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      var _partition = predicate(item) ? positive : negative;

      _partition.push(item);
    }

    return [positive, negative];
  };
}

function groupBy(computeKey) {
  return function (arr) {
    var groups = {};

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      var key = computeKey(item);

      if (!groups.hasOwnProperty(key)) {
        groups[key] = [item];
      } else {
        groups[key].push(item);
      }
    }

    return groups;
  };
}

function groupEntriesBy(computeKey) {
  var deserializeKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _higherOrderFunctions.identity;
  return function (arr) {
    var grouped = groupBy(computeKey)(arr);
    var groupKeys = (0, _accessFunctions.keys)(grouped);
    var deserializedGroupKeys = (0, _mappingFunctions.map)(deserializeKey)(groupKeys);
    return (0, _mappingFunctions.map)(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          deserialized = _ref2[1];

      return [deserialized, grouped[key]];
    })((0, _joinFunctions.zip)(groupKeys, deserializedGroupKeys));
  };
}

function chunk(size) {
  return function (arr) {
    var chunks = [];
    var i = 0;

    while (i < arr.length) {
      var _chunk = [];

      for (var step = 0; step < size; step++) {
        _chunk.push(arr[i]);

        i++;
      }

      chunks.push(_chunk);
    }

    return chunks;
  };
}

function splitAt(position) {
  return function (arr) {
    return [arr.slice(0, position), arr.slice(position)];
  };
}