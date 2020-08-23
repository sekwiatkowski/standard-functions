function isArray(input) {
    return Array.isArray(input)
}

function isFunction(input) {
    return typeof input === 'function'
}

function isObject(input) {
    return typeof input === 'object'
}

function isString(input) {
    return typeof input === 'string'
}

function isNull(input) {
    return input === null
}

function isUndefined(input) {
    return input === undefined
}

function defaultsTo(defaultValue) {
    return input => (input === null || input === undefined) ? defaultValue : input
}

module.exports = {
    isArray,
    isFunction,
    isObject,
    isString,

    isNull,
    isUndefined,
    defaultsTo
}
