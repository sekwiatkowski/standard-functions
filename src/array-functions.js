import {fromEntries} from './object-functions'
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

