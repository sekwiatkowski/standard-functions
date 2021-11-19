export function isDefined(input) {
    return input !== undefined
}

export function isUndefined(input) {
    return input === undefined
}

export function isNull(input) {
    return input === null
}

export function isNotNull(input) {
    return input !== null
}

export function isBoolean(input) {
    return input === false || input === true
}

export function isNumber(input) {
    return typeof input === 'number'
}

export function isString(input) {
    return typeof input === 'string'
}

export function isFunction(input) {
    return typeof input === 'function'
}

export function isArray(input) {
    return Array.isArray(input)
}

export function is2DArray(input) {
    return isArray(input) && isArray(input[0])
}

export function defaultValue(value) {
    return input => input ?? value
}

export function isObject(input) {
    return typeof input === 'object'
}