"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDigit = isDigit;
exports.isLowercaseEnglishLetter = isLowercaseEnglishLetter;
exports.isUppercaseEnglishLetter = isUppercaseEnglishLetter;
exports.uppercaseEnglishLetters = exports.lowercaseEnglishLetters = exports.digits = void 0;
var digits = '0123456789';
exports.digits = digits;

function isDigit(c) {
  return digits.includes(c);
}

var lowercaseEnglishLetters = 'abcdefghijklmnopqrstuvwxyz';
exports.lowercaseEnglishLetters = lowercaseEnglishLetters;

function isLowercaseEnglishLetter(c) {
  return lowercaseEnglishLetters.includes(c);
}

var uppercaseEnglishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
exports.uppercaseEnglishLetters = uppercaseEnglishLetters;

function isUppercaseEnglishLetter(c) {
  return uppercaseEnglishLetters.includes(c);
}