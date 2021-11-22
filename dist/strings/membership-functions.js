"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containsSubstring = containsSubstring;
exports.isSubstringOf = isSubstringOf;
exports.startsWith = startsWith;
exports.endsWith = endsWith;

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