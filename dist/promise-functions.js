"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;
exports.reject = reject;
exports.parallel = parallel;
exports.mapFulfilled = mapFulfilled;
exports.mapPromise = mapPromise;
exports.parallelMap = parallelMap;

var _arrayFunctions = require("./array-functions");

var _stringOrArrayFunctions = require("./string-or-array-functions");

var _typeFunctions = require("./type-functions");

var _singleAccessFunctions = require("./single-access-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function resolve(value) {
  return Promise.resolve(value);
}

function reject(reason) {
  return Promise.reject(reason);
}

function parallel() {
  for (var _len = arguments.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
    promises[_key] = arguments[_key];
  }

  if ((0, _stringOrArrayFunctions.isSingle)(promises)) {
    var firstItem = (0, _singleAccessFunctions.first)(promises);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return parallel.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return Promise.all(promises);
}

function mapFulfilled(functionOrValue) {
  return function (promise) {
    return promise.then((0, _typeFunctions.isFunction)(functionOrValue) ? functionOrValue : function () {
      return functionOrValue;
    });
  };
}

function mapPromise(ifFulfilled) {
  return function (ifRejected) {
    return function (promise) {
      return promise.then((0, _typeFunctions.isFunction)(ifFulfilled) ? ifFulfilled : function () {
        return ifFulfilled;
      }, (0, _typeFunctions.isFunction)(ifRejected) ? ifRejected : function () {
        return ifRejected;
      });
    };
  };
}

function parallelMap(f) {
  return function (arr) {
    return parallel((0, _arrayFunctions.map)(f)(arr));
  };
}