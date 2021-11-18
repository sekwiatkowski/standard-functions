"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;
exports.filterIndices = filterIndices;
exports.exclude = exclude;
exports.excludeNull = excludeNull;

var _booleanFunctions = require("../boolean-functions");

var _lengthFunctions = require("../collections/length-functions");

var _typeFunctions = require("../type-functions");

function filter(predicate) {
  return function (arr) {
    return arr.filter(predicate);
  };
}

function filterIndices(predicate) {
  return function (arr) {
    var indices = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        indices.push(i);
      }
    }

    return indices;
  };
}

function exclude(predicate) {
  return function (arr) {
    return arr.filter((0, _booleanFunctions.not)(predicate));
  };
}

function excludeNull(input) {
  if ((0, _lengthFunctions.isSingle)(arguments)) {
    if ((0, _typeFunctions.isNull)(input)) {
      return [];
    } else if ((0, _typeFunctions.isArray)(input)) {
      return exclude(_typeFunctions.isNull)(input);
    } else {
      return [input];
    }
  } else {
    return excludeNull(Array.prototype.slice.call(arguments));
  }
}