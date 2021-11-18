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
export const isNotEmpty = isLongerThan(0)
export const isSingle = isOfLength(1)

export const isMultiple = isLongerThan(1)

export function isSingleOrEmpty(collection) {
    return isEmpty(collection) || isSingle(collection)
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
    return arr.length - 1
}
