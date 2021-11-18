"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.associate = associate;
exports.associateBy = associateBy;
exports.associateWith = associateWith;
exports.hasProperty = hasProperty;
exports.isPropertyOf = isPropertyOf;
exports.property = property;
exports.propertyOf = propertyOf;
exports.properties = properties;
exports.propertiesOf = propertiesOf;
exports.propertyEquals = propertyEquals;
exports.setProperty = setProperty;
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.mapKeys = mapKeys;
exports.mapValues = mapValues;
exports.mapEntries = mapEntries;
exports.mapObject = mapObject;
exports.filterKeys = filterKeys;
exports.excludeKeys = excludeKeys;
exports.filterValues = filterValues;
exports.excludeValues = excludeValues;
exports.merge = merge;
exports.mergeWith = mergeWith;
exports.extend = extend;
exports.extendWith = extendWith;
exports.omit = omit;
exports.pick = pick;
exports.pickAll = pickAll;
exports.fromProperty = fromProperty;
exports.fromEntry = fromEntry;
exports.fromEntries = fromEntries;
exports.flattenObject = flattenObject;
exports.unflattenObject = unflattenObject;
exports.reverseObject = reverseObject;

var _arrayFunctions = require("./array-functions.js");

var _booleanFunctions = require("./boolean-functions.js");

var _stringOrArrayFunctions = require("./string-or-array-functions");

var _typeFunctions = require("./type-functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isObject(input) {
  return _typeof(input) === 'object';
}

function associate(f) {
  return function (items) {
    var obj = {};

    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        var _f = f(item),
            _f2 = _slicedToArray(_f, 2),
            key = _f2[0],
            value = _f2[1];

        obj[key] = value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return obj;
  };
}

function associateBy(f) {
  return function (values) {
    var obj = {};

    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var value = _step2.value;
        obj[f(value)] = value;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return obj;
  };
}

function associateWith(f) {
  return function (keys) {
    var obj = {};

    var _iterator3 = _createForOfIteratorHelper(keys),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        obj[key] = f(key);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return obj;
  };
}

function hasProperty(key) {
  return function (obj) {
    return obj.hasOwnProperty(key);
  };
}

function isPropertyOf(obj) {
  return function (key) {
    return obj.hasOwnProperty(key);
  };
}

function property(key, defaultValue) {
  return function (obj) {
    return obj.hasOwnProperty(key) ? obj[key] : defaultValue;
  };
}

function propertyOf(obj, defaultValue) {
  return function (key) {
    return property(key, defaultValue)(obj);
  };
}

function properties() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return function (obj) {
    if ((0, _stringOrArrayFunctions.isSingle)(keys)) {
      var singleItem = (0, _arrayFunctions.single)(keys);

      if ((0, _typeFunctions.isArray)(singleItem)) {
        return properties.apply(void 0, _toConsumableArray(singleItem))(obj);
      }
    }

    var result = [];

    for (var i = 0; i < keys.length; i++) {
      result[i] = obj[keys[i]];
    }

    return result;
  };
}

function propertiesOf(obj) {
  return function (keys) {
    return properties(keys)(obj);
  };
}

function propertyEquals(property) {
  return function (value) {
    return function (obj) {
      return obj[property] === value;
    };
  };
}

function setProperty(key) {
  return function (valueOrFunction) {
    return function (obj) {
      return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, (0, _typeFunctions.isFunction)(valueOrFunction) ? valueOrFunction(obj[key]) : valueOrFunction));
    };
  };
}

function keys(obj) {
  return Object.keys(obj);
}

function values(obj) {
  return Object.values(obj);
}

function entries(obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
}

function mapKeys(f) {
  return function (obj) {
    var result = {};
    var keys = Object.keys(obj);

    for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
      var key = _keys[_i2];
      result[f(key)] = obj[key];
    }

    return result;
  };
}

function mapValues(f) {
  return function (obj) {
    var result = {};
    var keys = Object.keys(obj);

    for (var _i3 = 0, _keys2 = keys; _i3 < _keys2.length; _i3++) {
      var key = _keys2[_i3];
      var value = obj[key];
      result[key] = f(value);
    }

    return result;
  };
}

function mapEntries(f) {
  return function (obj) {
    var entries = Object.entries(obj);
    var numberOfEntries = entries.length;
    var result = Array(numberOfEntries);

    for (var index = 0; index < numberOfEntries; index++) {
      var _entries$index = _slicedToArray(entries[index], 2),
          key = _entries$index[0],
          value = _entries$index[1];

      result[index] = f([key, value]);
    }

    return result;
  };
}

function mapObject(f) {
  return function (obj) {
    var result = {};
    var entries = Object.entries(obj);

    for (var _i4 = 0, _entries = entries; _i4 < _entries.length; _i4++) {
      var entry = _entries[_i4];

      var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];

      result[key] = f([key, value]);
    }

    return result;
  };
}

function filterKeys(predicate) {
  return function (obj) {
    var result = {};
    var entries = Object.entries(obj);

    for (var _i5 = 0, _entries2 = entries; _i5 < _entries2.length; _i5++) {
      var entry = _entries2[_i5];

      var _entry2 = _slicedToArray(entry, 2),
          key = _entry2[0],
          value = _entry2[1];

      if (predicate(key)) {
        result[key] = value;
      }
    }

    return result;
  };
}

function excludeKeys(predicate) {
  return filterKeys((0, _booleanFunctions.not)(predicate));
}

function filterValues(predicate) {
  return function (obj) {
    var result = {};
    var entries = Object.entries(obj);

    for (var _i6 = 0, _entries3 = entries; _i6 < _entries3.length; _i6++) {
      var entry = _entries3[_i6];

      var _entry3 = _slicedToArray(entry, 2),
          key = _entry3[0],
          value = _entry3[1];

      if (predicate(value)) {
        result[key] = value;
      }
    }

    return result;
  };
}

function excludeValues(predicate) {
  return filterValues((0, _booleanFunctions.not)(predicate));
}

function merge() {
  for (var _len2 = arguments.length, firstOrArray = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    firstOrArray[_key2] = arguments[_key2];
  }

  if ((0, _stringOrArrayFunctions.isSingle)(firstOrArray)) {
    var singleItem = (0, _arrayFunctions.single)(firstOrArray);

    if ((0, _typeFunctions.isNull)(singleItem) || (0, _typeFunctions.isUndefined)(singleItem)) {
      return {};
    } else if ((0, _typeFunctions.isArray)(singleItem)) {
      return merge.apply(void 0, _toConsumableArray(singleItem));
    } else if (isObject(singleItem)) {
      return singleItem;
    } else {
      throw Error("Expected either an array, an object, null or undefined. Received: ".concat(singleItem));
    }
  } else {
    return (0, _arrayFunctions.fold)(function (acc, obj) {
      return (0, _typeFunctions.isNull)(obj) || (0, _typeFunctions.isUndefined)(obj) ? acc : _objectSpread(_objectSpread({}, acc), obj);
    })({})(firstOrArray);
  }
}

function mergeWith(f) {
  return function () {
    for (var _len3 = arguments.length, firstOrArray = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      firstOrArray[_key3] = arguments[_key3];
    }

    if ((0, _stringOrArrayFunctions.isSingle)(firstOrArray)) {
      var singleItem = (0, _arrayFunctions.single)(firstOrArray);

      if ((0, _typeFunctions.isArray)(singleItem)) {
        return mergeWith(f).apply(void 0, _toConsumableArray(singleItem));
      } else if (isObject(singleItem)) {
        return singleItem;
      } else if ((0, _typeFunctions.isNull)(singleItem) || (0, _typeFunctions.isUndefined)(singleItem)) {
        return {};
      } else {
        throw Error("Expected either an array, an object, null or undefined. Received: ".concat(singleItem));
      }
    } else {
      return (0, _arrayFunctions.fold)(function (acc, item) {
        if ((0, _typeFunctions.isNull)(item) || (0, _typeFunctions.isUndefined)(item)) {
          return acc;
        }

        var merged = _objectSpread({}, acc);

        for (var _i7 = 0, _Object$entries = Object.entries(item); _i7 < _Object$entries.length; _i7++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i7], 2),
              itemKey = _Object$entries$_i[0],
              itemValue = _Object$entries$_i[1];

          merged[itemKey] = acc.hasOwnProperty(itemKey) ? f(acc[itemKey])(itemValue) : itemValue;
        }

        return merged;
      })({})(firstOrArray);
    }
  };
}

function extend(b) {
  return function (a) {
    return _objectSpread(_objectSpread({}, a), b !== null && b !== void 0 ? b : {});
  };
}

function extendWith(f) {
  return function (b) {
    return function (a) {
      var definiteB = b !== null && b !== void 0 ? b : {};

      var result = _objectSpread({}, a);

      for (var _i8 = 0, _Object$entries2 = Object.entries(definiteB); _i8 < _Object$entries2.length; _i8++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i8], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        result[key] = result.hasOwnProperty(key) ? f(result[key])(value) : value;
      }

      return result;
    };
  };
}

function omit() {
  for (var _len4 = arguments.length, omittedKeys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    omittedKeys[_key4] = arguments[_key4];
  }

  if ((0, _stringOrArrayFunctions.isSingle)(omittedKeys)) {
    var firstItem = (0, _stringOrArrayFunctions.first)(omittedKeys);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return omit.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return function (obj) {
    var partialObject = {};
    var keys = Object.keys(obj);

    for (var _i9 = 0, _keys3 = keys; _i9 < _keys3.length; _i9++) {
      var key = _keys3[_i9];

      if (!omittedKeys.includes(key)) {
        partialObject[key] = obj[key];
      }
    }

    return partialObject;
  };
}

function pick() {
  for (var _len5 = arguments.length, keys = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    keys[_key5] = arguments[_key5];
  }

  if ((0, _stringOrArrayFunctions.isSingle)(keys)) {
    var firstItem = (0, _stringOrArrayFunctions.first)(keys);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return pick.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return function (obj) {
    var partialObject = {};

    var _iterator4 = _createForOfIteratorHelper(keys),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var key = _step4.value;

        if (obj.hasOwnProperty(key)) {
          partialObject[key] = obj[key];
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return partialObject;
  };
}

function pickAll() {
  for (var _len6 = arguments.length, keys = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    keys[_key6] = arguments[_key6];
  }

  if ((0, _stringOrArrayFunctions.isSingle)(keys)) {
    var firstItem = (0, _stringOrArrayFunctions.first)(keys);

    if ((0, _typeFunctions.isArray)(firstItem)) {
      return pick.apply(void 0, _toConsumableArray(firstItem));
    }
  }

  return function (obj) {
    var partialObject = {};

    var _iterator5 = _createForOfIteratorHelper(keys),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var key = _step5.value;
        partialObject[key] = obj[key];
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return partialObject;
  };
}

function fromProperty(key) {
  return function (value) {
    return _defineProperty({}, key, value);
  };
}

function fromEntry(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];

  return _defineProperty({}, key, value);
}

function fromEntries(entries) {
  return Object.fromEntries(entries);
}
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
  var stopCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _booleanFunctions.not)(isObject);
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var flattened = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var unflattenedKeys = Object.keys(unflattened);

  for (var _i10 = 0, _unflattenedKeys = unflattenedKeys; _i10 < _unflattenedKeys.length; _i10++) {
    var key = _unflattenedKeys[_i10];
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

  for (var _i11 = 0, _flattenedKeys = flattenedKeys; _i11 < _flattenedKeys.length; _i11++) {
    var key = _flattenedKeys[_i11];
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

function reverseObject(input) {
  var reversed = {};
  var entries = Object.entries(input);

  for (var _i12 = 0, _entries4 = entries; _i12 < _entries4.length; _i12++) {
    var entry = _entries4[_i12];
    reversed[entry[1]] = entry[0];
  }

  return reversed;
}