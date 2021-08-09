import {exclude, isArray} from './array-functions'
import {excludeValues, isObject} from './object-functions'

export function isNull(input) {
    return input === null
}

export function isNotNull(input) {
    return input !== null
}

export function excludeNull(objOrArray) {
    if (isArray(objOrArray)) {
        return exclude(isNull) (objOrArray)
    }
    else if(isObject(objOrArray)) {
        return excludeValues(isNull) (objOrArray)
    }
}