import {isString} from './string-functions'
import {isFunction} from './higher-order-functions'
import {isArray} from './array-functions'

export function nth(index) {
    return arr => arr[index]
}

export function head(arr) {
    return arr[0]
}

export function tail(arr) {
    let size = arr.length-1
    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = arr[i+1]
    }

    return res
}

export function headAndTail(arr) {
    return [ head(arr), tail(arr) ]
}

export function init(arr) {
    let size = arr.length-1

    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = arr[i]
    }

    return res
}

export function initAndLast(arr) {
    return [ init(arr), last(arr) ]
}

export function single(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            const results = input.filter(predicateOrInput)
            const numberOfResults = results.length

            if (numberOfResults === 1) {
                return results[0]
            }
            else {
                throw Error(`Expected a single search result. Found ${numberOfResults} items.`)
            }
        }
    }
    else {
        const numberOfItems = predicateOrInput.length

        if (numberOfItems === 1) {
            return predicateOrInput[0]
        }
        else {
            const message = isArray(predicateOrInput)
                ? `Expected a single item. Found ${numberOfItems} items.`
                : `Expected a single character. Found ${numberOfItems} characters.`

            throw Error(message)
        }
    }
}

export function first(functionOrArray) {
    if (isFunction(functionOrArray)) {
        return input => {
            for (let i = 0; i < input.length; i++) {
                const item = input[i]

                if (functionOrArray(item)) {
                    return item
                }
            }

            return null
        }
    }
    else {
        return functionOrArray[0]
    }
}

export function second(arr) {
    return arr[1]
}

export function last(arr) {
    return arr[arr.length - 1]
}

export function take(n) {
    return collection => collection.slice(0, n)
}

export function takeFrom(collection) {
    return n => take(n) (collection)
}

export function takeLast(n) {
    return collection => collection.slice(Math.max(collection.length - n, 0))
}

export function takeLastFrom(collection) {
    return n => takeLast(n) (collection)
}

export function takeWhile(predicate) {
    return collection => {
        const res = []
        for (let i = 0; i < collection.length; i++) {
            const item = collection[i]
            if (!predicate(item, i)) {
                return res
            }

            res.push(item)
        }

        return res
    }
}

export function drop(n) {
    return collection => collection.slice(n)
}

export function dropFrom(arr) {
    return n => drop(n) (arr)
}

export function dropLast(n) {
    return arr => arr.slice(0, -n)
}

export function dropLastFrom(arr) {
    return n => dropLast(n) (arr)
}

export function dropWhile(predicate) {
    return arr => {
        let dropped = 0
        while (dropped < arr.length) {
            const item = arr[dropped]
            if (predicate(item, dropped)) {
                dropped++
            }
            else {
                break
            }
        }

        return arr.slice(dropped)
    }
}

export function append(item) {
    return collection => isString(collection) ? collection + item : [...collection, item]
}

export function appendTo(collection) {
    return item => isString(collection) ? collection + item : [...collection, item]
}

export function prepend(item) {
    return collection => isString(collection) ? item + collection : [item, ...collection]
}

export function prependTo(collection) {
    return item => isString(collection) ? item + collection :  [item, ...collection]
}

export function concat(...items) {
    if (items.length === 1) {
        const firstItem = items[0]

        return concat(...firstItem)
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

export const isOfLengthOne = isOfLength(1)

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