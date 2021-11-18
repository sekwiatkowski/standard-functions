"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = single;
exports.singleOrNull = singleOrNull;
exports.getItem = getItem;
exports.head = head;
exports.first = first;
exports.second = second;
exports.last = last;
exports.nth = void 0;

var _typeFunctions = require("./type-functions");

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

function head(input) {
  return input[0];
}

function first(predicateOrInput) {
  if ((0, _typeFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      for (var i = 0; i < input.length; i++) {
        var item = input[i];

        if (predicateOrInput(item)) {
          return item;
        }
      }

      return null;
    };
  } else {
    return predicateOrInput[0];
  }
}

function second(input) {
  return input[1];
}

function last(predicateOrInput) {
  if ((0, _typeFunctions.isFunction)(predicateOrInput)) {
    return function (input) {
      for (var i = input.length - 1; i >= 0; i--) {
        var item = input[i];

        if (predicateOrInput(item)) {
          return item;
        }
      }

      return null;
    };
  } else {
    return predicateOrInput[predicateOrInput.length - 1];
  }
}