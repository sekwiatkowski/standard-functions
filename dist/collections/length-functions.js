"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.length = length;
exports.isOfLength = isOfLength;
exports.isShorterThan = isShorterThan;
exports.isLongerThan = isLongerThan;
exports.isSingleOrEmpty = isSingleOrEmpty;
exports.isMultiple = exports.isSingle = exports.isNotEmpty = exports.isEmpty = void 0;

var _booleanFunctions = require("../boolean-functions");

function length(collection) {
  return collection.length;
}

function isOfLength(expectedLength) {
  return function (collection) {
    return length(collection) === expectedLength;
  };
}

function isShorterThan(expectedLength) {
  return function (collection) {
    return length(collection) < expectedLength;
  };
}

function isLongerThan(expectedLength) {
  return function (collection) {
    return length(collection) > expectedLength;
  };
}

var isEmpty = isOfLength(0);
exports.isEmpty = isEmpty;
var isNotEmpty = (0, _booleanFunctions.isGreaterThan)(0);
exports.isNotEmpty = isNotEmpty;
var isSingle = isOfLength(1);
exports.isSingle = isSingle;
var isMultiple = isLongerThan(1);
exports.isMultiple = isMultiple;

function isSingleOrEmpty(collection) {
  return isEmpty(collection) || isSingle(collection);
}