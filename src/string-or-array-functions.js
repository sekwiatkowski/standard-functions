import {isString} from './string-functions'

export function nth(index) {
    return arr => arr[index]
}

export function head(arr) {
    return arr[0]
}

export const first = head

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

export function last(arr) {
    return arr[arr.length - 1]
}

export function initAndLast(arr) {
    return [ init(arr), last(arr) ]
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

export function concat(collection) {
    const initial = isString(collection[0]) ? '' : []

    return collection.reduce(
        (acc, s) => acc.concat(s),
        initial
    )
}