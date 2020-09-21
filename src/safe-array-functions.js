import {None, some} from './option'
import {find, findIndex, first, last} from './array-functions'
import {after, drop} from './string-or-array-functions'

export function safeFirst(arr) {
    return arr.length >= 1
        ? some(arr)
        : None
}

export function safeSingle(arr) {
    return arr.length === 1
        ? some(first(arr))
        : None
}

export function safeLast(arr) {
    return arr.length >= 1
        ? some(last(arr))
        : None
}

export function safeDrop(n) {
    return arr => arr.length >= n
        ? some(drop(n)(arr))
        : None
}

export function safeFind(predicate) {
    return arr => {
        const result = find(predicate)(arr)
        return result !== null
            ? some(result)
            : None
    }
}

export function safeFindIndex(predicate) {
    return arr => {
        const result = findIndex(predicate)(arr)
        return result !== null
            ? some(result)
            : None
    }
}

export function safeAfter(index) {
    return arr =>
        index < arr.length
            ? some(after(index)(arr))
            : None
}