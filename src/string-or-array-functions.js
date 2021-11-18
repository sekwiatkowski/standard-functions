import {indexOf} from './array-functions'
import {equals} from './boolean-functions'
import {isArray, isFunction, isString} from './type-functions'

export function append(appendix) {
    return original => {
        if (isString(original)) {
            return original + appendix
        }
        else {
            if (isArray(appendix)) {
                return [...original, ...appendix]
            }
            else {
                return [...original, appendix]
            }
        }
    }
}

export function appendTo(original) {
    return appendix => append(appendix) (original)
}

export function prepend(prefix) {
    return original => {
        if (isString(original)) {
            return prefix + original
        }
        else {
            if (isArray(prefix)) {
                return [...prefix, ...original]
            }
            else {
                return [prefix, ...original]
            }
        }
    }
}

export function prependTo(original) {
    return prefix => prepend(prefix) (original)
}

export function insertAt(index) {
    return item => arr => {
        const before = arr.slice(0, index)
        const after = arr.slice(index)

        return [
            ...before,
            item,
            ...after
        ]
    }
}

export function remove(itemOrPredicate) {
    return arr => {
        const copy = arr.slice()

        const predicate = isFunction(itemOrPredicate) ? itemOrPredicate : equals(itemOrPredicate);

        let i = arr.length - 1

        while (i >= 0) {
            if (predicate(arr[i])) {
                copy.splice(i, 1)
            }

            i--
        }

        return copy
    }
}

export function removeAt(index) {
    return arr => {
        const copy = arr.slice()
        copy.splice(index, 1)

        return copy
    }
}

export function removeFirstOccurrence(item) {
    return arr => {
        const index = indexOf(item) (arr)

        return removeAt(index) (arr)
    }
}

export function removeLastOccurrence(item) {
    return arr => {
        const index = indexOf(item) (arr)

        return removeAt(index) (arr)
    }
}

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

export function reverse(input) {
    const inputLength = input.length
    const reversedArray = Array(inputLength)

    for (let i = 0; i < inputLength; i++) {
        reversedArray[i] = input[inputLength - i - 1]
    }

    return reversedArray
}