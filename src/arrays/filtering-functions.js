import {not} from '../boolean-functions'
import {isSingle} from '../collections/length-functions'
import {isArray, isNull} from '../type-functions'

export function filter(predicate) {
    return arr => arr.filter(predicate)
}

export function filterIndices(predicate) {
    return arr => {
        const indices = []

        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                indices.push(i)
            }
        }

        return indices
    }
}

export function exclude(predicate) {
    return arr => arr.filter(not(predicate))
}

export function excludeNull(input) {
    if (isSingle(arguments)) {
        if (isNull(input)) {
            return []
        }
        else if (isArray(input)) {
            return exclude(isNull)(input)
        }
        else {
            return [input]
        }
    } else {
        return excludeNull(Array.prototype.slice.call(arguments))
    }
}