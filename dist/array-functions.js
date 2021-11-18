"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;
exports.flatten = flatten;
exports.zipObject = zipObject;
exports.arrayOf = arrayOf;
exports.range = range;
exports.inclusiveRange = inclusiveRange;
exports.steps = steps;
exports.inclusiveSteps = inclusiveSteps;
exports.fill = fill;
exports.indices = indices;
exports.lastIndex = lastIndex;
exports.slice = slice;

var _objectFunctions = require("./object-functions");

var _lengthFunctions = require("./collections/length-functions");

var _joinFunctions = require("./arrays/join-functions");

function forEach(f) {
  return function (arr) {
    arr.forEach(f);
  };
}

function flatten(arr) {
  return arr.flat();
}

function zipObject(as) {
  return function (bs) {
    return (0, _objectFunctions.fromEntries)((0, _joinFunctions.zip)(as, bs));
  };
}

function arrayOf() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values;
}

function range(inclusiveStart) {
  return function (exclusiveEnd) {
    return steps(inclusiveStart)(exclusiveEnd)(1);
  };
}

function inclusiveRange(inclusiveStart) {
  return function (inclusiveEnd) {
    return range(inclusiveStart)(inclusiveEnd + 1);
  };
}

function steps(inclusiveStart) {
  return function (exclusiveEnd) {
    return function (stepSize) {
      var size = Math.ceil((exclusiveEnd - inclusiveStart) / stepSize);

      if (size < 1) {
        return [];
      }

      var result = Array(size);

      for (var i = 0, current = inclusiveStart; i < size; i++, current += stepSize) {
        result[i] = current;
      }

      return result;
    };
  };
}

function inclusiveSteps(inclusiveStart) {
  return function (inclusiveEnd) {
    return function (stepSize) {
      return steps(inclusiveStart)(inclusiveEnd + 1)(stepSize);
    };
  };
}

function fill(value) {
  return function (n) {
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = value;
    }

    return result;
  };
}

function indices(arr) {
  var n = arr.length;
  var result = Array(n);

  for (var i = 0; i < n; i++) {
    result[i] = i;
  }

  return result;
}

function lastIndex(arr) {
  return arr.length - 1;
}

function slice(indices) {
  return function (arr) {
    var n = (0, _lengthFunctions.length)(indices);
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = arr[indices[i]];
    }

    return result;
  };
}