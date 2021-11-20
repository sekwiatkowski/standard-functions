"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.first = first;
exports.second = second;
exports.last = last;
exports.single = single;
exports.head = exports.nth = void 0;

var _lengthFunctions = require("./length-functions");

function getItem(index) {
  return function (arr) {
    return arr[index];
  };
}

var nth = getItem;
exports.nth = nth;

function first(collection) {
  return collection[0];
}

var head = first;
exports.head = head;

function second(collection) {
  return collection[1];
}

function last(collection) {
  return collection[collection.length - 1];
}

function single(arr) {
  if ((0, _lengthFunctions.isSingle)(arr)) {
    return arr[0];
  } else if ((0, _lengthFunctions.isEmpty)(arr)) {
    throw Error("Expected a single item. Found no items.");
  } else {
    throw Error("Expected a single search result. Found no items.");
  }
}