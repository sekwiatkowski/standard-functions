import {isArray, isString} from './type-functions'

export function concat(...items) {
    if (items.length === 1) {
        const firstItem = items[0]

        if (isArray(firstItem)) {
            // 2D array with a single item
            if (firstItem.length === 1) {
                return firstItem[0]
            }
            else {
                return concat(...firstItem)
            }
        }
    }

    const initial = isString(items[0]) ? '' : []

    return items.reduce(
        (acc, s) => acc.concat(s),
        initial
    )
}

export function isEmpty(collection) {
    return collection.length === 0
}

export function isNotEmpty(collection) {
    return collection.length > 0
}

export function isOfLength(length) {
    return collection => collection.length === length
}

export const isSingle = isOfLength(1)

export const isMultiple = isLongerThan(1)

export function isSingleOrEmpty(collection) {
    return isEmpty(collection) || isSingle(collection)
}

export function isShorterThan(length) {
    return collection => collection.length < length
}

export function isLongerThan(length) {
    return collection => collection.length > length
}

export function length(collection) {
    return collection.length
}

