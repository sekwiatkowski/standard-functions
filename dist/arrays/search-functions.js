"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.findLast = findLast;
exports.findIndex = findIndex;
exports.indexOf = indexOf;
exports.singleIndex = singleIndex;
exports.minBy = minBy;
exports.maxBy = maxBy;

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

function singleIndex(predicate) {
  return function (arr) {
    var matches = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        matches.push(i);
      }
    }

    var numberOfResults = matches.length;

    if (numberOfResults === 0) {
      throw Error("Expected a single search result. Found no ".concat(numberOfResults, " matching items."));
    } else if (numberOfResults > 1) {
      throw Error("Expected a single search result. Found ".concat(numberOfResults, " matching items."));
    }

    return matches[0];
  };
}

function minBy(f) {
  return function (arr) {
    var lowestScore = Number.POSITIVE_INFINITY;
    var index = -1;

    for (var i = 0; i < arr.length; i++) {
      var score = f(arr[i]);

      if (score < lowestScore) {
        lowestScore = score;
        index = i;
      }
    }

    return arr[index];
  };
}

function maxBy(f) {
  return function (arr) {
    var highestScore = Number.NEGATIVE_INFINITY;
    var index = -1;

    for (var i = 0; i < arr.length; i++) {
      var score = f(arr[i]);

      if (score > highestScore) {
        highestScore = score;
        index = i;
      }
    }

    return arr[index];
  };
}