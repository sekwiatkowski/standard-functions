import {isString} from './string-functions'

export function take(n) {
    return arr => arr.slice(0, n)
}

export function takeFrom(arr) {
    return n => take(n) (arr)
}

export function takeLast(n) {
    return arr => arr.slice(Math.max(arr.length - n, 0))
}


export function takeLastFrom(arr) {
    return n => takeLast(n) (arr)
}

export function takeWhile(predicate) {
    return arr => {
        const res = []
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            if (!predicate(item, i)) {
                return res
            }

            res.push(item)
        }

        return res
    }
}

export function drop(n) {
    return arr => arr.slice(n)
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

export function before(n) {
    return arr => arr.slice(0, n)
}

export function after(n) {
    return arr => arr.slice(n+1)
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

export function isEmpty(arr) {
    return arr.length ===  0
}

export function isNotEmpty(arr) {
    return arr.length > 0
}

export function isOfLength(length) {
    return arr => arr.length === length
}

export function length(arr) {
    return arr.length
}

export function concat(...items) {
    if (isString(items[0])) {
        return items.reduce(
            (acc, s) => acc.concat(s),
            ''
        )
    }
    else {
        return items.reduce(
            (acc, arr) => acc.concat(arr),
            []
        )
    }
}