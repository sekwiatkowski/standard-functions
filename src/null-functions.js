import {exclude, isArray} from './array-functions'
import {excludeValues, isObject} from './object-functions'
import {isSingle} from './string-or-array-functions'

export function isNull(input) {
    return input === null
}

export function isNotNull(input) {
    return input !== null
}

export function excludeNull(input) {
    if (isSingle(arguments)) {
        if (isNull(input)) {
            return []
        }
        else if (isArray(input)) {
            return exclude(isNull) (input)
        }
        else if (isObject(input)) {
            return excludeValues(isNull) (input)
        }
        else {
            return [input]
        }
    }
    else {
        return excludeNull(Array.prototype.slice.call(arguments))
    }
}