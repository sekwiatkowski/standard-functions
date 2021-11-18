import {isEmpty} from '../collections/length-functions'
import {isNumber} from '../type-functions'

export function sort(arr) {
    const copy = arr.slice()

    if (isEmpty(arr)) {
        return copy
    }

    if (isNumber(arr[0])) {
        return copy.sort((a, b) => a - b)
    }

    return copy.sort()
}

export function sortDescendingly(arr) {
    const copy = arr.slice()

    if (isEmpty(arr)) {
        return copy
    }

    if (isNumber(arr[0])) {
        return copy.sort((a, b) => -(a - b))
    }

    return copy.sort((a, b) => (a > b ? -1 : 1))
}

export function sortBy(f) {
    return arr => arr.slice().sort((a, b) => f(a) - f(b))
}

export function sortDescendinglyBy(f) {
    return arr => arr.slice().sort((a, b) => -(f(a) - f(b)))
}