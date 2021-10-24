import {exclude, isArray} from './array-functions'
import {isSingle} from './string-or-array-functions'

export function isNull(input) {
    return input === null
}

export function isNotNull(input) {
    return input !== null
}

export function isDefined(input) {
    return input !== undefined
}

export function isUndefined(input) {
    return input === undefined
}

export function excludeNull(input) {
    if (isSingle(arguments)) {
        if (isNull(input)) {
            return []
        }
        else if (isArray(input)) {
            return exclude(isNull) (input)
        }
        else {
            return [input]
        }
    }
    else {
        return excludeNull(Array.prototype.slice.call(arguments))
    }
}

export function defaultValue(value) {
    return input => input ?? value
}