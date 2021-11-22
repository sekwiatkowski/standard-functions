"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slice = slice;
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
exports.before = before;
exports.beforeIndex = beforeIndex;
exports.after = after;
exports.afterIndex = afterIndex;
exports.beforeAndAfterIndex = beforeAndAfterIndex;
exports.upTo = upTo;
exports.upToIndex = upToIndex;

var _singleAccessFunctions = require("./single-access-functions");

var _lengthFunctions = require("./length-functions");

var _searchFunctions = require("../arrays/search-functions");

var _typeFunctions = require("../type-functions");

var _creationFunctions = require("../arrays/creation-functions");

function slice(indices) {
  return function (input) {
    var n = (0, _lengthFunctions.length)(indices);
    var result = Array(n);

    for (var i = 0; i < n; i++) {
      result[i] = input[indices[i]];
    }

    return result;
  };
}

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

function before(predicate) {
  return function (input) {
    var index = (0, _searchFunctions.findIndex)(predicate)(input);

    if ((0, _typeFunctions.isNull)(index)) {
      return [];
    }

    return beforeIndex(index)(input);
  };
}

function beforeIndex(index) {
  return function (collection) {
    if (index > (0, _lengthFunctions.lastIndex)(collection)) {
      return collection;
    }

    return slice((0, _creationFunctions.range)(0)(index))(collection);
  };
}

function after(predicate) {
  return function (collection) {
    var index = (0, _searchFunctions.findIndex)(predicate)(collection);

    if ((0, _typeFunctions.isNull)(index)) {
      return [];
    }

    return afterIndex(index)(collection);
  };
}

function afterIndex(index) {
  return function (collection) {
    if (index >= (0, _lengthFunctions.lastIndex)(collection)) {
      return [];
    }

    return slice((0, _creationFunctions.range)(index + 1)((0, _lengthFunctions.length)(collection)))(collection);
  };
}

function beforeAndAfterIndex(index) {
  return function (collection) {
    var before = beforeIndex(index)(collection);
    var after = afterIndex(index)(collection);
    return [before, after];
  };
}

function upTo(predicate) {
  return function (collection) {
    var index = (0, _searchFunctions.findIndex)(predicate)(collection);

    if ((0, _typeFunctions.isNull)(index)) {
      return [];
    }

    return upToIndex(index)(collection);
  };
}

function upToIndex(index) {
  return function (collection) {
    if (index >= (0, _lengthFunctions.lastIndex)(collection)) {
      return collection;
    }

    return slice((0, _creationFunctions.inclusiveRange)(0)(index))(collection);
  };
}