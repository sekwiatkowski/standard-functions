import {fromEntries} from './object-functions'
import {equals} from './boolean-functions'
import {isFunction} from './type-functions'
import {length} from './collections/length-functions'
import {zip} from './arrays/join-functions'

export function forEach(f) {
    return arr => {
        arr.forEach(f)
    }
}

export function flatten(arr) {
    return arr.flat()
}

export function zipObject(as) {
    return bs => fromEntries(zip(as, bs))
}

export function arrayOf(...values) {
    return values
}

export function range(inclusiveStart) {
    return exclusiveEnd => {
        return steps(inclusiveStart) (exclusiveEnd) (1)
    }
}

export function inclusiveRange(inclusiveStart) {
    return inclusiveEnd => {
        return range(inclusiveStart) (inclusiveEnd+1)
    }
}

export function steps(inclusiveStart) {
    return exclusiveEnd => stepSize => {
        const size = Math.ceil((exclusiveEnd - inclusiveStart) / stepSize)

        if (size < 1) {
            return []
        }

        const result = Array(size)

        for (let i = 0, current = inclusiveStart; i < size; i++, current += stepSize) {
            result[i] = current
        }

        return result
    }
}

export function inclusiveSteps(inclusiveStart) {
    return inclusiveEnd => stepSize => steps(inclusiveStart) (inclusiveEnd+1) (stepSize)
}

export function fill(value) {
    return n => {
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = value
        }

        return result
    }
}

export function indices(arr) {
    const n = arr.length
    const result = Array(n)

    for (let i = 0; i < n; i++) {
        result[i] = i
    }

    return result
}

export function lastIndex(arr) {
    return arr.length-1
}

export function slice(indices) {
    return arr => {
        const n = length(indices)
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = arr[indices[i]]
        }

        return result
    }
}

export function count(itemOrPredicate) {
    return arr => {
        let counter = 0

        const predicate = isFunction(itemOrPredicate)
            ? itemOrPredicate
            : equals(itemOrPredicate)

        for (const item of arr) {
            if (predicate(item)) {
                counter += 1
            }
        }

        return counter
    }
}

