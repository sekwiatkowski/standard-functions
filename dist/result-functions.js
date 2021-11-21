"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = succeed;
exports.fail = fail;
exports.failIf = failIf;
exports.isSuccess = isSuccess;
exports.isFailure = isFailure;
exports.mapResult = mapResult;
exports.mapFailure = mapFailure;
exports.chainResult = chainResult;
exports.catchResult = catchResult;
exports.foldResult = foldResult;
exports.invertResults = invertResults;
exports.failIfNull = exports.failIfEmpty = void 0;

var _aggregationFunctions = require("./arrays/aggregation-functions");

var _updateFunctions = require("./collections/update-functions");

var _lengthFunctions = require("./collections/length-functions");

var _typeFunctions = require("./type-functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function succeed(value) {
  return {
    value: value,
    kind: 'success'
  };
}

function fail(error) {
  return {
    error: error,
    kind: 'failure'
  };
}

function failIf(condition) {
  return function (error) {
    return function (input) {
      return condition(input) ? fail(error) : succeed(input);
    };
  };
}

var failIfEmpty = failIf(_lengthFunctions.isEmpty);
exports.failIfEmpty = failIfEmpty;
var failIfNull = failIf(_typeFunctions.isNull);
exports.failIfNull = failIfNull;

function isSuccess(result) {
  return result.kind === 'success';
}

function isFailure(result) {
  return result.kind === 'failure';
}

function throwUnsupportedKind(kind) {
  throw Error("Unsupported kind: ".concat(kind));
}

function mapResult(f) {
  return function (result) {
    switch (result.kind) {
      case 'success':
        return _objectSpread(_objectSpread({}, result), {}, {
          value: f(result.value)
        });

      case 'failure':
        return result;

      default:
        throwUnsupportedKind(result.kind);
    }
  };
}

function mapFailure(f) {
  return function (result) {
    switch (result.kind) {
      case 'success':
        return result;

      case 'failure':
        return _objectSpread(_objectSpread({}, result), {}, {
          error: f(result.error)
        });

      default:
        throwUnsupportedKind(result.kind);
    }
  };
}

function chainResult(f) {
  return function (result) {
    switch (result.kind) {
      case 'success':
        return f(result.value);

      case 'failure':
        return result;

      default:
        throwUnsupportedKind(result.kind);
    }
  };
}

function catchResult(f) {
  return function (result) {
    switch (result.kind) {
      case 'success':
        return result;

      case 'failure':
        return f(result.error);

      default:
        throwUnsupportedKind(result.kind);
    }
  };
}

function foldResult(onSuccess) {
  return function (onFailure) {
    return function (result) {
      switch (result.kind) {
        case 'success':
          return onSuccess(result.value);

        case 'failure':
          return onFailure(result.error);

        default:
          throwUnsupportedKind(result.kind);
      }
    };
  };
}

function invertResults() {
  for (var _len = arguments.length, results = new Array(_len), _key = 0; _key < _len; _key++) {
    results[_key] = arguments[_key];
  }

  return (0, _aggregationFunctions.fold)(function (acc, result) {
    return chainResult(function (arr) {
      return mapResult((0, _updateFunctions.appendTo)(arr))(result);
    })(acc);
  })(succeed([]))(results);
}