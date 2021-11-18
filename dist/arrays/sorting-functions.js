"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = sort;
exports.sortDescendingly = sortDescendingly;
exports.sortBy = sortBy;
exports.sortDescendinglyBy = sortDescendinglyBy;

var _lengthFunctions = require("../collections/length-functions");

var _typeFunctions = require("../type-functions");

function sort(arr) {
  var copy = arr.slice();

  if ((0, _lengthFunctions.isEmpty)(arr)) {
    return copy;
  }

  if ((0, _typeFunctions.isNumber)(arr[0])) {
    return copy.sort(function (a, b) {
      return a - b;
    });
  }

  return copy.sort();
}

function sortDescendingly(arr) {
  var copy = arr.slice();

  if ((0, _lengthFunctions.isEmpty)(arr)) {
    return copy;
  }

  if ((0, _typeFunctions.isNumber)(arr[0])) {
    return copy.sort(function (a, b) {
      return -(a - b);
    });
  }

  return copy.sort(function (a, b) {
    return a > b ? -1 : 1;
  });
}

function sortBy(f) {
  return function (arr) {
    return arr.slice().sort(function (a, b) {
      return f(a) - f(b);
    });
  };
}

function sortDescendinglyBy(f) {
  return function (arr) {
    return arr.slice().sort(function (a, b) {
      return -(f(a) - f(b));
    });
  };
}