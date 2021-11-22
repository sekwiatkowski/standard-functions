import {head, last} from './single-access-functions'
import {lastIndex, length} from './length-functions'
import {findIndex} from '../arrays/search-functions'
import {isNull} from '../type-functions'
import {inclusiveRange, range} from '../arrays/creation-functions'

export function slice(indices) {
    return input => {
        const n = length(indices)

        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = input[indices[i]]
        }

        return result
    }
}

export function tail(input) {
    const length = input.length
    if (length <= 1) {
        return []
    }

    const tailLength = length - 1

    const res = Array(tailLength)

    for (let i = 0; i < tailLength; i++) {
        res[i] = input[i + 1]
    }

    return res
}

export function headAndTail(input) {
    return [head(input), tail(input)]
}

export function init(input) {
    let size = input.length - 1

    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = input[i]
    }

    return res
}

export function initAndLast(input) {
    return [init(input), last(input)]
}

export function take(n) {
    return input => input.slice(0, n)
}

export function takeFrom(input) {
    return n => take(n)(input)
}

export function takeLast(n) {
    return input => input.slice(Math.max(input.length - n, 0))
}

export function takeLastFrom(input) {
    return n => takeLast(n)(input)
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
    return n => drop(n)(input)
}

export function dropLast(n) {
    return input => input.slice(0, -n)
}

export function dropLastFrom(input) {
    return n => dropLast(n)(input)
}

export function dropWhile(predicate) {
    return input => {
        let dropped = 0
        while (dropped < input.length) {
            const item = input[dropped]
            if (predicate(item, dropped)) {
                dropped++
            } else {
                break
            }
        }

        return input.slice(dropped)
    }
}

export function before(predicate) {
    return input => {
        const index = findIndex(predicate) (input)

        if (isNull(index)) {
            return []
        }

        return beforeIndex(index) (input)
    }
}

export function beforeIndex(index) {
    return collection => {
        if (index > lastIndex(collection)) {
            return collection
        }

        return slice(range(0) (index)) (collection)
    }
}

export function after(predicate) {
    return collection => {
        const index = findIndex(predicate) (collection)

        if (isNull(index)) {
            return []
        }

        return afterIndex(index) (collection)
    }
}

export function afterIndex(index) {
    return collection => {
        if (index >= lastIndex(collection)) {
            return []
        }

        return slice(range(index + 1)(length(collection))) (collection)
    }
}

export function beforeAndAfterIndex(index) {
    return collection => {
        const before = beforeIndex(index) (collection)
        const after = afterIndex(index) (collection)

        return [before, after]
    }
}

export function upTo(predicate) {
    return collection => {
        const index = findIndex(predicate)(collection)

        if (isNull(index)) {
            return []
        }

        return upToIndex(index) (collection)
    }
}

export function upToIndex(index) {
    return collection => {
        if (index >= lastIndex(collection)) {
            return collection
        }

        return slice(inclusiveRange(0)(index)) (collection)
    }
}
