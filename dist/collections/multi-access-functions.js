"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = tail;
exports.headAndTail = headAndTail;
exports.init = init;
exports.initAndLast = initAndLast;
exports.take = take;
exports.takeFrom = takeFrom;
exports.takeLast = takeLast;
exports.takeLastFrom = takeLastFrom;
exports.takeWhile = takeWhile;
exports.drop = drop;
exports.dropFrom = dropFrom;
exports.dropLast = dropLast;
exports.dropLastFrom = dropLastFrom;
exports.dropWhile = dropWhile;

var _singleAccessFunctions = require("./single-access-functions");

function tail(input) {
  var length = input.length;

  if (length <= 1) {
    return [];
  }

  var tailLength = length - 1;
  var res = Array(tailLength);

  for (var i = 0; i < tailLength; i++) {
    res[i] = input[i + 1];
  }

  return res;
}

function headAndTail(input) {
  return [(0, _singleAccessFunctions.head)(input), tail(input)];
}

function init(input) {
  var size = input.length - 1;
  var res = Array(size);

  for (var i = 0; i < size; i++) {
    res[i] = input[i];
  }

  return res;
}

function initAndLast(input) {
  return [init(input), (0, _singleAccessFunctions.last)(input)];
}

function take(n) {
  return function (input) {
    return input.slice(0, n);
  };
}

function takeFrom(input) {
  return function (n) {
    return take(n)(input);
  };
}

function takeLast(n) {
  return function (input) {
    return input.slice(Math.max(input.length - n, 0));
  };
}

function takeLastFrom(input) {
  return function (n) {
    return takeLast(n)(input);
  };
}

function takeWhile(predicate) {
  return function (input) {
    var res = [];

    for (var i = 0; i < input.length; i++) {
      var item = input[i];

      if (!predicate(item, i)) {
        return res;
      }

      res.push(item);
    }

    return res;
  };
}

function drop(n) {
  return function (input) {
    return input.slice(n);
  };
}

function dropFrom(input) {
  return function (n) {
    return drop(n)(input);
  };
}

function dropLast(n) {
  return function (input) {
    return input.slice(0, -n);
  };
}

function dropLastFrom(input) {
  return function (n) {
    return dropLast(n)(input);
  };
}

function dropWhile(predicate) {
  return function (input) {
    var dropped = 0;

    while (dropped < input.length) {
      var item = input[dropped];

      if (predicate(item, dropped)) {
        dropped++;
      } else {
        break;
      }
    }

    return input.slice(dropped);
  };
}