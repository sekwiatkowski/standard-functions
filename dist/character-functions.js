"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDigit = isDigit;
exports.isLowercaseEnglishLetter = isLowercaseEnglishLetter;
exports.isUppercaseEnglishLetter = isUppercaseEnglishLetter;
var digits = '0123456789';

function isDigit(c) {
  return digits.includes(c);
}

var lowercaseEnglishLetters = 'abcdefghijklmnopqrstuvwxyz';

function isLowercaseEnglishLetter(c) {
  return lowercaseEnglishLetters.includes(c);
}

var uppercaseEnglishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function isUppercaseEnglishLetter(c) {
  return uppercaseEnglishLetters.includes(c);
}