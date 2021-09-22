"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = isString;
exports.toString = toString;
exports.split = split;
exports.join = join;
exports.surroundWith = surroundWith;
exports.lower = lower;
exports.upper = upper;
exports.capitalize = capitalize;
exports.trim = trim;
exports.containsSubstring = containsSubstring;
exports.isSubstringOf = isSubstringOf;
exports.removeDuplicateWhitespaces = removeDuplicateWhitespaces;
exports.startsWith = startsWith;
exports.endsWith = endsWith;
exports.replaceFirst = replaceFirst;
exports.replaceLast = replaceLast;
exports.replaceAll = replaceAll;
exports.beforeAndAfter = beforeAndAfter;
exports.surroundWithDoubleQuotes = exports.surroundWithSingleQuotes = exports.surroundWithParentheses = exports.joinWithEqualitySign = exports.joinWithNewline = exports.joinWithSpace = exports.joinWithSlash = exports.joinWithSemicolonSpace = exports.joinWithSemicolon = exports.joinWithDot = exports.joinWithDash = exports.joinWithCommaSpace = exports.joinWithComma = exports.joinWithAmpersand = exports.splitByEqualitySign = exports.splitByNewline = exports.splitBySpace = exports.splitBySlash = exports.splitBySemicolonSpace = exports.splitBySemicolon = exports.splitByDot = exports.splitByDash = exports.splitByCommaSpace = exports.splitByComma = exports.splitByAmpersand = void 0;

var _arrayFunctions = require("./array-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isString(input) {
  return typeof input === 'string';
}

function toString(input) {
  return input.toString();
}

function split(separator) {
  return function (s) {
    return s.split(separator);
  };
}

var splitByAmpersand = split('&');
exports.splitByAmpersand = splitByAmpersand;
var splitByComma = split(',');
exports.splitByComma = splitByComma;
var splitByCommaSpace = split(', ');
exports.splitByCommaSpace = splitByCommaSpace;
var splitByDash = split('-');
exports.splitByDash = splitByDash;
var splitByDot = split('.');
exports.splitByDot = splitByDot;
var splitBySemicolon = split('; ');
exports.splitBySemicolon = splitBySemicolon;
var splitBySemicolonSpace = split('; ');
exports.splitBySemicolonSpace = splitBySemicolonSpace;
var splitBySlash = split('/');
exports.splitBySlash = splitBySlash;
var splitBySpace = split(' ');
exports.splitBySpace = splitBySpace;
var splitByNewline = split('\n');
exports.splitByNewline = splitByNewline;
var splitByEqualitySign = split('=');
exports.splitByEqualitySign = splitByEqualitySign;

function join(separator) {
  return function () {
    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    if (items.length === 1) {
      var firstItem = items[0];

      if ((0, _arrayFunctions.isArray)(firstItem)) {
        return join(separator).apply(void 0, _toConsumableArray(firstItem));
      }
    }

    return items.join(separator);
  };
}

var joinWithAmpersand = join('&');
exports.joinWithAmpersand = joinWithAmpersand;
var joinWithComma = join(',');
exports.joinWithComma = joinWithComma;
var joinWithCommaSpace = join(', ');
exports.joinWithCommaSpace = joinWithCommaSpace;
var joinWithDash = join('-');
exports.joinWithDash = joinWithDash;
var joinWithDot = join('.');
exports.joinWithDot = joinWithDot;
var joinWithSemicolon = join(';');
exports.joinWithSemicolon = joinWithSemicolon;
var joinWithSemicolonSpace = join('; ');
exports.joinWithSemicolonSpace = joinWithSemicolonSpace;
var joinWithSlash = join('/');
exports.joinWithSlash = joinWithSlash;
var joinWithSpace = join(' ');
exports.joinWithSpace = joinWithSpace;
var joinWithNewline = join('\n');
exports.joinWithNewline = joinWithNewline;
var joinWithEqualitySign = join('=');
exports.joinWithEqualitySign = joinWithEqualitySign;

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

function lower(input) {
  return input.toLowerCase();
}

function upper(input) {
  return input.toUpperCase();
}

function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function trim(input) {
  return input.trim();
}

function containsSubstring(substring) {
  return function (candidate) {
    return candidate.includes(substring);
  };
}

function isSubstringOf(text) {
  return function (candidate) {
    return containsSubstring(candidate)(text);
  };
}

function removeDuplicateWhitespaces(input) {
  return input.replace(/\s{2,}/g, ' ');
}

function startsWith(searchString) {
  return function (input) {
    return input.startsWith(searchString);
  };
}

function endsWith(searchString) {
  return function (input) {
    return input.endsWith(searchString);
  };
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

function beforeAndAfter(separator) {
  return function (input) {
    var idx = input.indexOf(separator);
    var before = input.substring(0, idx);
    var after = input.substring(idx + separator.length);
    return [before, after];
  };
}