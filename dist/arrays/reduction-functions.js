"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fold = fold;
exports.foldWhile = foldWhile;
exports.reduce = reduce;

function fold(f) {
  return function (initialValue) {
    return function (arr) {
      var acc = initialValue;

      for (var i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i], i);
      }

      return acc;
    };
  };
}

function foldWhile(predicate) {
  return function (f) {
    return function (initialValue) {
      return function (arr) {
        var acc = initialValue;

        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          acc = f(acc, item);

          if (!predicate(acc, item)) {
            return acc;
          }
        }

        return acc;
      };
    };
  };
}

function reduce(f) {
  return function (arr) {
    var acc = arr[0];

    for (var i = 1; i < arr.length; i++) {
      acc = f(acc, arr[i], i);
    }

    return acc;
  };
}