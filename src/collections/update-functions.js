import {isString} from '../type-functions'
import {indexOf} from '../arrays/search-functions'
import {equals} from '../booleans/equality-functions'
import {exclude} from '../arrays/filtering-functions'

export function update(index) {
    return item => arr => {
        const copy = arr.slice()
        copy[index] = item
        return copy
    }
}

export function updateBy(f) {
    return index => arr => {
        const copy = arr.slice()
        copy[index] = f(arr[index])
        return copy
    }
}

export function swap(first) {
    return second => arr => {
        if (first >= second) {
            throw Error('The second index must be greater than the first index.')
        }

        const beforeFirst = arr.slice(0, first)
        const between = arr.slice(first + 1, second)
        const afterSecond = arr.slice(second + 1)

        return [
            ...beforeFirst,
            arr[second],
            ...between,
            arr[first],
            ...afterSecond
        ]
    }
}

export function append(appendix) {
    return original => {
        if (isString(original)) {
            return original + appendix
        }
        else {
            return [...original, appendix]
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
        }
        else {
            return [prefix, ...original]
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
    return arr => exclude(equals(item)) (arr)
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

        return removeAt(index) (arr)
    }
}

export function removeLastOccurrence(item) {
    return arr => {
        const index = indexOf(item)(arr)

        return removeAt(index) (arr)
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