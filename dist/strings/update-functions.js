"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.surroundWith = surroundWith;
exports.removeFirst = removeFirst;
exports.removeLast = removeLast;
exports.removeAll = removeAll;
exports.removeDuplicateWhitespaces = removeDuplicateWhitespaces;
exports.replaceFirst = replaceFirst;
exports.replaceLast = replaceLast;
exports.replaceAll = replaceAll;
exports.pad = pad;
exports.trim = trim;
exports.surroundWithDoubleQuotes = exports.surroundWithSingleQuotes = exports.surroundWithParentheses = void 0;

var _lengthFunctions = require("../collections/length-functions");

var _mappingFunctions = require("./mapping-functions");

function surroundWith(beginning) {
  return function (end) {
    return function (str) {
      return beginning + str + end;
    };
  };
}

var surroundWithParentheses = surroundWith('(')(')');
exports.surroundWithParentheses = surroundWithParentheses;
var surroundWithSingleQuotes = surroundWith("'")("'");
exports.surroundWithSingleQuotes = surroundWithSingleQuotes;
var surroundWithDoubleQuotes = surroundWith('"')('"');
exports.surroundWithDoubleQuotes = surroundWithDoubleQuotes;

function removeFirst(toBeRemoved) {
  return replaceFirst(toBeRemoved)('');
}

function removeLast(toBeRemoved) {
  return replaceLast(toBeRemoved)('');
}

function removeAll(toBeRemoved) {
  return replaceAll(toBeRemoved)('');
}

function removeDuplicateWhitespaces(input) {
  return input.replace(/\s{2,}/g, ' ');
}

function replaceFirst(toBeReplaced) {
  return function (replacement) {
    return function (input) {
      return input.replace(toBeReplaced, replacement);
    };
  };
}

function replaceLast(toBeReplaced) {
  return function (replacement) {
    return function (input) {
      var lastIndex = input.lastIndexOf(toBeReplaced);

      if (lastIndex === -1) {
        return input;
      }

      var before = input.substring(0, lastIndex);
      var after = input.substring(lastIndex + toBeReplaced.length);
      return before + replacement + after;
    };
  };
}

function replaceAll(toBeReplaced) {
  return function (replacement) {
    return function (input) {
      return input.replace(new RegExp(toBeReplaced, 'g'), replacement);
    };
  };
}

function pad(character) {
  return function (minimumLength) {
    return function (input) {
      var remaining = minimumLength - (0, _lengthFunctions.length)(input);

      if (remaining <= 0) {
        return input;
      }

      var start = (0, _mappingFunctions.repeat)(remaining)(character);
      return start + input;
    };
  };
}

function trim(input) {
  return input.trim();
}