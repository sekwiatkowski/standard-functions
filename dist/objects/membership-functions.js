"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasProperty = hasProperty;
exports.isPropertyOf = isPropertyOf;
exports.propertyEquals = propertyEquals;

function hasProperty(key) {
  return function (obj) {
    return obj.hasOwnProperty(key);
  };
}

function isPropertyOf(obj) {
  return function (key) {
    return obj.hasOwnProperty(key);
  };
}

function propertyEquals(property) {
  return function (value) {
    return function (obj) {
      return obj[property] === value;
    };
  };
}