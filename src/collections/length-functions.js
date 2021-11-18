import {isGreaterThan} from '../boolean-functions'

export function length(collection) {
    return collection.length
}

export function isOfLength(expectedLength) {
    return collection => length(collection) === expectedLength
}

export function isShorterThan(expectedLength) {
    return collection => length(collection) < expectedLength
}

export function isLongerThan(expectedLength) {
    return collection => length(collection) > expectedLength
}

export const isEmpty = isOfLength(0)
export const isNotEmpty = isGreaterThan(0)
export const isSingle = isOfLength(1)

export const isMultiple = isLongerThan(1)

export function isSingleOrEmpty(collection) {
    return isEmpty(collection) || isSingle(collection)
}
