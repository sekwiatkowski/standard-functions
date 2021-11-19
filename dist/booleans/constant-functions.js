"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alwaysFalse = exports.alwaysTrue = void 0;

var _higherOrderFunctions = require("../higher-order-functions");

var alwaysTrue = (0, _higherOrderFunctions.constant)(true);
exports.alwaysTrue = alwaysTrue;
var alwaysFalse = (0, _higherOrderFunctions.constant)(false);
exports.alwaysFalse = alwaysFalse;