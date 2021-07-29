import {isString} from './string-functions'
import {isFunction} from './higher-order-functions'
import {isArray} from './array-functions'

export function nth(index) {
    return input => input[index]
}

export function head(input) {
    return input[0]
}

export function tail(input) {
    let size = input.length-1
    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = input[i+1]
    }

    return res
}

export function headAndTail(input) {
    return [ head(input), tail(input) ]
}

export function init(input) {
    let size = input.length-1

    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = input[i]
    }

    return res
}

export function initAndLast(input) {
    return [ init(input), last(input) ]
}

export function first(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            for (let i = 0; i < input.length; i++) {
                const item = input[i]

                if (predicateOrInput(item)) {
                    return item
                }
            }

            return null
        }
    }
    else {
        return predicateOrInput[0]
    }
}

export function second(input) {
    return input[1]
}

export function last(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            for (let i = input.length - 1; i >= 0; i--) {
                const item = input[i]

                if (predicateOrInput(item)) {
                    return item
                }
            }

            return null
        }
    }
    else {
        return predicateOrInput[predicateOrInput.length - 1]
    }
}

export function take(n) {
    return input => input.slice(0, n)
}

export function takeFrom(input) {
    return n => take(n) (input)
}

export function takeLast(n) {
    return input => input.slice(Math.max(input.length - n, 0))
}

export function takeLastFrom(input) {
    return n => takeLast(n) (input)
}

export function takeWhile(predicate) {
    return input => {
        const res = []
        for (let i = 0; i < input.length; i++) {
            const item = input[i]
            if (!predicate(item, i)) {
                return res
            }

            res.push(item)
        }

        return res
    }
}

export function drop(n) {
    return input => input.slice(n)
}

export function dropFrom(input) {
    return n => drop(n) (input)
}

export function dropLast(n) {
    return input => input.slice(0, -n)
}

export function dropLastFrom(input) {
    return n => dropLast(n) (input)
}

export function dropWhile(predicate) {
    return input => {
        let dropped = 0
        while (dropped < input.length) {
            const item = input[dropped]
            if (predicate(item, dropped)) {
                dropped++
            }
            else {
                break
            }
        }

        return input.slice(dropped)
    }
}

export function append(item) {
    return input => isString(input) ? input + item : [...input, item]
}

export function appendTo(input) {
    return item => isString(input) ? input + item : [...input, item]
}

export function prepend(item) {
    return input => isString(input) ? item + input : [item, ...input]
}

export function prependTo(input) {
    return item => isString(input) ? item + input :  [item, ...input]
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