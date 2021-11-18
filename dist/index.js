"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  length: true,
  isLongerThan: true,
  isShorterThan: true,
  isSingleOrEmpty: true,
  isMultiple: true,
  isSingle: true,
  isOfLength: true,
  isNotEmpty: true,
  isEmpty: true
};
Object.defineProperty(exports, "length", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.length;
  }
});
Object.defineProperty(exports, "isLongerThan", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isLongerThan;
  }
});
Object.defineProperty(exports, "isShorterThan", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isShorterThan;
  }
});
Object.defineProperty(exports, "isSingleOrEmpty", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isSingleOrEmpty;
  }
});
Object.defineProperty(exports, "isMultiple", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isMultiple;
  }
});
Object.defineProperty(exports, "isSingle", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isSingle;
  }
});
Object.defineProperty(exports, "isOfLength", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isOfLength;
  }
});
Object.defineProperty(exports, "isNotEmpty", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isNotEmpty;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function get() {
    return _lengthFunctions.isEmpty;
  }
});

var _typeFunctions = require("./type-functions");

Object.keys(_typeFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typeFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typeFunctions[key];
    }
  });
});

var _arrayFunctions = require("./array-functions");

Object.keys(_arrayFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _arrayFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _arrayFunctions[key];
    }
  });
});

var _pairFunctions = require("./pair-functions");

Object.keys(_pairFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _pairFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pairFunctions[key];
    }
  });
});

var _stringFunctions = require("./string-functions");

Object.keys(_stringFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _stringFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stringFunctions[key];
    }
  });
});

var _characterFunctions = require("./character-functions");

Object.keys(_characterFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _characterFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _characterFunctions[key];
    }
  });
});

var _stringOrArrayFunctions = require("./string-or-array-functions");

Object.keys(_stringOrArrayFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _stringOrArrayFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stringOrArrayFunctions[key];
    }
  });
});

var _booleanFunctions = require("./boolean-functions");

Object.keys(_booleanFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _booleanFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _booleanFunctions[key];
    }
  });
});

var _numberFunctions = require("./number-functions");

Object.keys(_numberFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _numberFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _numberFunctions[key];
    }
  });
});

var _higherOrderFunctions = require("./higher-order-functions");

Object.keys(_higherOrderFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _higherOrderFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _higherOrderFunctions[key];
    }
  });
});

var _objectFunctions = require("./object-functions");

Object.keys(_objectFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _objectFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objectFunctions[key];
    }
  });
});

var _promiseFunctions = require("./promise-functions");

Object.keys(_promiseFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _promiseFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _promiseFunctions[key];
    }
  });
});

var _singleAccessFunctions = require("./single-access-functions");

Object.keys(_singleAccessFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _singleAccessFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _singleAccessFunctions[key];
    }
  });
});

var _multiAccessFunctions = require("./multi-access-functions");

Object.keys(_multiAccessFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _multiAccessFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _multiAccessFunctions[key];
    }
  });
});

var _updateFunctions = require("./update-functions");

Object.keys(_updateFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _updateFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _updateFunctions[key];
    }
  });
});

var _lengthFunctions = require("./length-functions");