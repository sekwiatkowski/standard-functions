import {equals} from '../booleans/equality-functions'

export function fold(f) {
    return initialValue => arr => {
        let acc = initialValue

        for (let i = 0; i < arr.length; i++) {
            acc = f(acc, arr[i], i)
        }

        return acc
    }
}

export function foldWhile(predicate) {
    return f => initialValue => arr => {
        let acc = initialValue

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            acc = f(acc, item)

            if (!predicate(acc, item)) {
                return acc
            }
        }

        return acc
    }
}

export function reduce(f) {
    return arr => {
        let acc = arr[0]

        for (let i = 1; i < arr.length; i++) {
            acc = f(acc, arr[i], i)
        }

        return acc
    }
}

export function count(item) {
    return countBy(equals(item))
}

export function countBy(predicate) {
    return arr => {
        let counter = 0

        for (const item of arr) {
            if (predicate(item)) {
                counter += 1
            }
        }

        return counter
    }
}

export function minBy(f) {
    return arr => {
        let lowestScore = Number.POSITIVE_INFINITY
        let index = -1

        for (let i = 0; i < arr.length; i++) {
            const score = f(arr[i])

            if (score < lowestScore) {
                lowestScore = score
                index = i
            }
        }

        return arr[index]
    }
}

export function maxBy(f) {
    return arr => {
        let highestScore = Number.NEGATIVE_INFINITY
        let index = -1

        for (let i = 0; i < arr.length; i++) {
            const score = f(arr[i])

            if (score > highestScore) {
                highestScore = score
                index = i
            }
        }

        return arr[index]
    }
}
