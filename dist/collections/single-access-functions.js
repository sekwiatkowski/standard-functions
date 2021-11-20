"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.first = first;
exports.second = second;
exports.last = last;
exports.head = exports.nth = void 0;

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