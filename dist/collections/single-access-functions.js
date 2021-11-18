"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = single;
exports.singleOrNull = singleOrNull;
exports.getItem = getItem;
exports.first = first;
exports.second = second;
exports.last = last;
exports.head = exports.nth = void 0;

var _typeFunctions = require("../type-functions");

function single(predicateOrInput) {
  if ((0, _typeFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      var results = input.filter(predicateOrInput);
      var numberOfResults = results.length;

      if (numberOfResults === 0) {
        throw Error("Expected a single search result. Found no matching items.");
      } else if (numberOfResults > 1) {
        throw Error("Expected a single search result. Found ".concat(numberOfResults, " matching items."));
      }

      return results[0];
    };
  } else {
    var numberOfItems = predicateOrInput.length;

    if (numberOfItems === 0) {
      throw Error("Expected a single item. Found no items.");
    } else if (numberOfItems > 1) {
      throw Error("Expected a single item. Found ".concat(numberOfItems, " items."));
    }

    return predicateOrInput[0];
  }
}

function singleOrNull(predicateOrInput) {
  if ((0, _typeFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      var results = input.filter(predicateOrInput);
      var numberOfResults = results.length;

      if (numberOfResults > 1) {
        throw Error("Expected one or no search results. Found ".concat(numberOfResults, " matching items."));
      }

      return results[0];
    };
  } else {
    var numberOfItems = predicateOrInput.length;

    if (numberOfItems > 1) {
      throw Error("Expected one or no items. Found ".concat(numberOfItems, " items."));
    }

    return predicateOrInput[0];
  }
}

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