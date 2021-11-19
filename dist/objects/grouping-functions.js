"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenObject = flattenObject;
exports.unflattenObject = unflattenObject;

var _negationFunctions = require("../booleans/negation-functions");

var _typeFunctions = require("../type-functions");

/*
    {
        a: 1,
        b: {
            c: 2
            d: 3
        },
        e: {
            f: {
                g: 4
            }
        }
    }
 */
function flattenObject(unflattened) {
  var stopCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _negationFunctions.not)(_typeFunctions.isObject);
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var flattened = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var unflattenedKeys = Object.keys(unflattened);

  for (var _i = 0, _unflattenedKeys = unflattenedKeys; _i < _unflattenedKeys.length; _i++) {
    var key = _unflattenedKeys[_i];
    var value = unflattened[key];

    if (stopCondition(value)) {
      var path = parent + key;
      flattened[path] = value;
    } else {
      flattenObject(value, stopCondition, parent + key + '.', flattened);
    }
  }

  return flattened;
}
/*
    {
        'a': 1,
        'b.c': 2,
        'b.d': 3,
        'e.f.g': 4
    }

    {
        a: 1,
        b: {
            c: 2
            d: 3
        },
        e: {
            f: {
                g: 4
            }
        }
    }
 */


function unflattenObject(flattened) {
  var unflattened = {};
  var flattenedKeys = Object.keys(flattened);

  for (var _i2 = 0, _flattenedKeys = flattenedKeys; _i2 < _flattenedKeys.length; _i2++) {
    var key = _flattenedKeys[_i2];
    var value = flattened[key];
    var fragments = key.split('.');
    var numberOfFragments = fragments.length;
    var current = unflattened;

    for (var indexFragment = 0; indexFragment < numberOfFragments - 1; indexFragment++) {
      var fragment = fragments[indexFragment];

      if (!current.hasOwnProperty(fragment)) {
        current[fragment] = {};
      }

      current = current[fragment];
    }

    current[fragments[numberOfFragments - 1]] = value;
  }

  return unflattened;
}