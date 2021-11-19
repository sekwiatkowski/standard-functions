"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = isFalse;
exports.isTrue = isTrue;
exports.equals = equals;
exports.doesNotEqual = doesNotEqual;
exports.isGreaterThan = isGreaterThan;
exports.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
exports.isLessThan = isLessThan;
exports.isLessThanOrEqualTo = isLessThanOrEqualTo;

function isFalse(input) {
  return input === false;
}

function isTrue(input) {
  return input === true;
}

function equals(a) {
  return function (b) {
    return a === b;
  };
}

function doesNotEqual(a) {
  return function (b) {
    return a !== b;
  };
}

function isGreaterThan(a) {
  return function (b) {
    return b > a;
  };
}

function isGreaterThanOrEqualTo(a) {
  return function (b) {
    return b >= a;
  };
}

function isLessThan(a) {
  return function (b) {
    return b < a;
  };
}

function isLessThanOrEqualTo(a) {
  return function (b) {
    return b <= a;
  };
}