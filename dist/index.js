"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  areContainedIn: true,
  containsAll: true,
  isNotContainedIn: true,
  doesNotContain: true,
  isContainedIn: true,
  contains: true
};
Object.defineProperty(exports, "areContainedIn", {
  enumerable: true,
  get: function get() {
    return _membershipFunctions.areContainedIn;
  }
});
Object.defineProperty(exports, "containsAll", {
  enumerable: true,
  get: function get() {
    return _membershipFunctions.containsAll;
  }
});
Object.defineProperty(exports, "isNotContainedIn", {
  enumerable: true,
  get: function get() {
    return _membershipFunctions.isNotContainedIn;
  }
});
Object.defineProperty(exports, "doesNotContain", {
  enumerable: true,
  get: function get() {
    return _membershipFunctions.doesNotContain;
  }
});
Object.defineProperty(exports, "isContainedIn", {
  enumerable: true,
  get: function get() {
    return _membershipFunctions.isContainedIn;
  }
});
Object.defineProperty(exports, "contains", {
  enumerable: true,
  get: function get() {
    return _membershipFunctions.contains;
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

var _singleAccessFunctions = require("./collections/single-access-functions");

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

var _multiAccessFunctions = require("./collections/multi-access-functions");

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

var _updateFunctions = require("./collections/update-functions");

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

var _lengthFunctions = require("./collections/length-functions");

Object.keys(_lengthFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _lengthFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lengthFunctions[key];
    }
  });
});

var _multiCollectionFunctions = require("./collections/multi-collection-functions");

Object.keys(_multiCollectionFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _multiCollectionFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _multiCollectionFunctions[key];
    }
  });
});

var _sortingFunctions = require("./arrays/sorting-functions");

Object.keys(_sortingFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sortingFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sortingFunctions[key];
    }
  });
});

var _filteringFunctions = require("./arrays/filtering-functions");

Object.keys(_filteringFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _filteringFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filteringFunctions[key];
    }
  });
});

var _setFunctions = require("./arrays/set-functions");

Object.keys(_setFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _setFunctions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setFunctions[key];
    }
  });
});

var _membershipFunctions = require("./arrays/membership-functions");