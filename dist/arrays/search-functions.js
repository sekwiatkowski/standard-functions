"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSingleOrNull = findSingleOrNull;
exports.findSingle = findSingle;
exports.findSingleIndexOrNull = findSingleIndexOrNull;
exports.findSingleIndex = findSingleIndex;
exports.find = find;
exports.findLast = findLast;
exports.findIndex = findIndex;
exports.findLastIndex = findLastIndex;
exports.indexOf = indexOf;
exports.lastIndexOf = lastIndexOf;
exports.indicesOf = indicesOf;

var _filteringFunctions = require("./filtering-functions");

var _equalityFunctions = require("../booleans/equality-functions");

var _typeFunctions = require("../type-functions");

function findSingleOrNull(predicate) {
  return function (input) {
    var matches = input.filter(predicate);
    var numberOfResults = matches.length;

    if (numberOfResults === 0) {
      return null;
    } else if (numberOfResults === 1) {
      return matches[0];
    } else {
      throw Error("Expected one or no search results. Found ".concat(numberOfResults, " matching items."));
    }
  };
}

function findSingle(predicate) {
  return function (input) {
    var indexOrNull = findSingleOrNull(predicate)(input);

    if ((0, _typeFunctions.isNull)(indexOrNull)) {
      throw Error("Expected a single search result. Found no matching items.");
    }

    return indexOrNull[0];
  };
}

function findSingleIndexOrNull(predicate) {
  return function (arr) {
    var matches = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        matches.push(i);
      }
    }

    var numberOfResults = matches.length;

    if (numberOfResults === 0) {
      return null;
    } else if (numberOfResults === 1) {
      return matches[0];
    } else {
      throw Error("Expected a single search result. Found ".concat(numberOfResults, " matching items."));
    }
  };
}

function findSingleIndex(predicate) {
  return function (arr) {
    var indexOrNull = findSingleIndexOrNull(predicate)(arr);

    if ((0, _typeFunctions.isNull)(indexOrNull)) {
      throw Error("Expected a single search result. Found no matching items.");
    }

    return indexOrNull;
  };
}

function find(predicate) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      if (predicate(item)) {
        return item;
      }
    }

    return null;
  };
}

function findLast(predicate) {
  return function (input) {
    for (var i = input.length - 1; i >= 0; i--) {
      var item = input[i];

      if (predicate(item)) {
        return item;
      }
    }

    return null;
  };
}

function findIndex(predicate) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        return i;
      }
    }

    return null;
  };
}

function findLastIndex(predicate) {
  return function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (predicate(arr[i])) {
        return i;
      }
    }

    return null;
  };
}

function indexOf(item) {
  return function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        return i;
      }
    }

    return null;
  };
}

function lastIndexOf(item) {
  return function (arr) {
    for (var i = arr.length - 1; i < arr.length; i--) {
      if (item === arr[i]) {
        return i;
      }
    }

    return null;
  };
}

function indicesOf(item) {
  return function (arr) {
    return (0, _filteringFunctions.filterIndices)((0, _equalityFunctions.equals)(item))(arr);
  };
}