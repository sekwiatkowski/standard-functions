import {isArray, isString} from '../type-functions'
import {equals} from '../boolean-functions'
import {indexOf} from '../array-functions'

export function append(appendix) {
    return original => {
        if (isString(original)) {
            return original + appendix
        } else {
            if (isArray(appendix)) {
                return [...original, ...appendix]
            } else {
                return [...original, appendix]
            }
        }
    }
}

export function appendTo(original) {
    return appendix => append(appendix)(original)
}

export function prepend(prefix) {
    return original => {
        if (isString(original)) {
            return prefix + original
        } else {
            if (isArray(prefix)) {
                return [...prefix, ...original]
            } else {
                return [prefix, ...original]
            }
        }
    }
}

export function prependTo(original) {
    return prefix => prepend(prefix)(original)
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

export function remove(item) {
    return arr => {
        const copy = arr.slice()

        let i = arr.length - 1

        while (i >= 0) {
            if (equals(item)) {
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
        const index = indexOf(item)(arr)

        return removeAt(index)(arr)
    }
}

export function removeLastOccurrence(item) {
    return arr => {
        const index = indexOf(item)(arr)

        return removeAt(index)(arr)
    }
}

export function reverse(input) {
    const inputLength = input.length
    const reversedArray = Array(inputLength)

    for (let i = 0; i < inputLength; i++) {
        reversedArray[i] = input[inputLength - i - 1]
    }

    return reversedArray
}