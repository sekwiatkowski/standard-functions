"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartesianProduct = cartesianProduct;
exports.zip = zip;
exports.unzip = unzip;

var _mappingFunctions = require("./mapping-functions");

var _lengthFunctions = require("../collections/length-functions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function cartesianProduct(as) {
  return function (bs) {
    var aLength = as.length;
    var bLength = bs.length;
    var product = new Array(aLength * bLength);

    for (var i = 0; i < aLength; i++) {
      for (var j = 0; j < bLength; j++) {
        product[i * bLength + j] = [as[i], bs[j]];
      }
    }

    return product;
  };
}

function zip() {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }

  // zip([ arr_1, ..., arr_n ])
  if ((0, _lengthFunctions.isSingle)(input)) {
    var arrayOfArrays = input[0]; /// zip([ arr_1 ])

    if (!(0, _lengthFunctions.isSingle)(arrayOfArrays)) {
      return arrayOfArrays[0];
    } else {
      return zip.apply(void 0, input);
    }
  }

  var numberOArrays = input.length;
  var minimumLength = Math.min.apply(Math, _toConsumableArray((0, _mappingFunctions.map)(_lengthFunctions.length)(input)));
  var result = new Array(minimumLength);

  for (var indexItem = 0; indexItem < minimumLength; indexItem++) {
    var zippedItem = new Array(numberOArrays);

    for (var indexInput = 0; indexInput < numberOArrays; indexInput++) {
      zippedItem[indexInput] = input[indexInput][indexItem];
    }

    result[indexItem] = zippedItem;
  }

  return result;
}

function unzip(arr) {
  var numberOfItems = arr.length;
  var numberOfArrays = Math.min.apply(Math, _toConsumableArray((0, _mappingFunctions.map)(_lengthFunctions.length)(arr)));
  var result = Array(numberOfArrays);

  for (var indexArray = 0; indexArray < numberOfArrays; indexArray++) {
    result[indexArray] = Array(numberOfItems);
  }

  for (var _indexArray = 0; _indexArray < numberOfArrays; _indexArray++) {
    var resultArray = result[_indexArray];

    for (var indexItem = 0; indexItem < numberOfItems; indexItem++) {
      resultArray[indexItem] = arr[indexItem][_indexArray];
    }
  }

  return result;
}