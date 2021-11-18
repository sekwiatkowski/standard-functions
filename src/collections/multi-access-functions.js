import {head, last} from './single-access-functions'
import {isFunction, isNull} from '../type-functions'
import {length} from './length-functions'
import {slice} from '../array-functions'
import {findIndex} from '../arrays/search-functions'
import {inclusiveRange, range} from '../arrays/range-functions'

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

export function before(indexOrPredicate) {
    return arr => {
        const index = isFunction(indexOrPredicate) ? findIndex(indexOrPredicate)(arr) : indexOrPredicate

        if (isNull(index)) {
            return []
        }

        return slice(range(0)(index))(arr)
    }
}

export function after(indexOrPredicate) {
    return arr => {
        const index = isFunction(indexOrPredicate) ? findIndex(indexOrPredicate)(arr) : indexOrPredicate

        if (isNull(index)) {
            return []
        }

        return slice(range(index + 1)(length(arr)))(arr)
    }
}

export function beforeAndAfter(separator) {
    return input => {
        const idx = input.indexOf(separator)

        const before = input.substring(0, idx)
        const after = input.substring(idx + separator.length)

        return [before, after]
    }
}

export function upTo(indexOrPredicate) {
    return arr => {
        const index = isFunction(indexOrPredicate) ? findIndex(indexOrPredicate)(arr) : indexOrPredicate

        if (isNull(index)) {
            return []
        }

        return slice(inclusiveRange(0)(index))(arr)
    }
}