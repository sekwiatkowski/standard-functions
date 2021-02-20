import {first, isOfLengthOne, length} from './string-or-array-functions'
import {fromEntries} from './object-functions'
import {isFunction} from './higher-order-functions'
import {not} from './boolean-functions'

export function isArray(input) {
    return Array.isArray(input)
}

export function forEach(f) {
    return arr => {
        arr.forEach(f)
    }
}

export function map(f) {
    return arr => arr.map(f)
}

export function flatMap(f) {
    return arr => arr.flatMap(f)
}

export function flatten(arr) {
    return arr.flat()
}

export function filter(predicate) {
    return arr => arr.filter(predicate)
}

export function exclude(predicate) {
    return arr => arr.filter(not(predicate))
}

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

export function unique(arr) {
    return arr.filter((item, index) => index === arr.indexOf(item))
}

export function difference(as) {
    return bs => as.filter(a => !bs.includes(a))
}

export function find(predicate) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            if (predicate(item)) {
                return item
            }
        }
        return null
    }
}

export function findIndex(predicate) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                return i
            }
        }
        return null
    }
}

export function indexOf(item) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return i
            }
        }
        return null
    }
}

export function partition(predicate) {
    return arr => {
        const positive = []
        const negative = []

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]

            const partition = predicate(item) ? positive : negative

            partition.push(item)
        }

        return [positive, negative]
    }
}

export function groupBy(computeKey) {
    return arr => {
        const groups = {}

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]

            const key = computeKey(item)

            if (!groups.hasOwnProperty(key)) {
                groups[key] = [item]
            }
            else {
                groups[key].push(item)
            }
        }

        return groups
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

export function chunk(size) {
    return arr => {
        const chunks = []

        let i = 0
        while (i < arr.length) {
            const chunk = []
            for (let step = 0; step < size; step++) {
                chunk.push(arr[i])
                i++
            }
            chunks.push(chunk)
        }

        return chunks
    }
}

export function splitAt(position) {
    return arr => [ arr.slice(0, position), arr.slice(position) ]
}

export function contains(itemOrPredicate) {
    return (...itemsOrArray) => {
        if (isOfLengthOne(itemsOrArray)) {
            const firstItem = first(itemsOrArray)

            if (isArray(firstItem)) {
                return contains(itemOrPredicate) (...firstItem)
            }
        }

        return isFunction(itemOrPredicate)
            ? findIndex(itemOrPredicate) (itemsOrArray) !== null
            : itemsOrArray.includes(itemOrPredicate)
    }
}

export function isContainedIn(...itemsOrArray) {
    return itemOrPredicate => {
        if (isOfLengthOne(itemsOrArray)) {
            const firstItem = first(itemsOrArray)

            if (isArray(firstItem)) {
                return contains(itemOrPredicate) (firstItem)
            }
        }

        return contains(itemOrPredicate) (...itemsOrArray)
    }
}

export function containsAll(...candidateItemsOrArray) {
    if (isOfLengthOne(candidateItemsOrArray)) {
        const firstCandidateItem = first(candidateItemsOrArray)
        if (isArray(firstCandidateItem)) {
            return containsAll(...firstCandidateItem)
        }
    }

    return (...itemsOrArray) => {
        if (isOfLengthOne(itemsOrArray)) {
            const firstItem = first(itemsOrArray)
            if (isArray(firstItem)) {
                return containsAll(candidateItemsOrArray) (...firstItem)
            }
        }

        for (let i = 0; i < candidateItemsOrArray.length; i++) {
            if (!itemsOrArray.includes(candidateItemsOrArray[i])) {
                return false
            }
        }

        return true
    }
}

export function areContainedIn(itemsOrArray) {
    return candidateItemsOrArray => containsAll(candidateItemsOrArray) (itemsOrArray)
}

export function all(p) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (!p(arr[i])) {
                return false
            }
        }

        return true
    }
}

export function any(p) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (p(arr[i])) {
                return true
            }
        }

        return false
    }
}

export function cartesianProduct(as) {
    return bs => {
        const aLength = as.length
        const bLength = bs.length

        const product = new Array(aLength * bLength)

        for (let i = 0; i < aLength; i++) {
            for (let j = 0; j < bLength; j++) {
                product[i * bLength + j] = [as[i], bs[j]]
            }
        }

        return product
    }
}

export function zip(...input) {
    // zip([ arr_1, ..., arr_n ])
    if (isOfLengthOne(input)) {
        const arrayOfArrays = input[0]

        /// zip([ arr_1 ])
        if (!isOfLengthOne(arrayOfArrays)) {
            return arrayOfArrays[0]
        }
        else {
            return zip(...input)
        }
    }

    const numberOArrays = input.length
    const minimumLength = Math.min(...map(length) (input))

    const result = new Array(minimumLength)

    for (let indexItem = 0; indexItem < minimumLength; indexItem++) {
        const zippedItem = new Array(numberOArrays)

        for (let indexInput = 0; indexInput < numberOArrays; indexInput++) {
            zippedItem[indexInput] = input[indexInput][indexItem]
        }

        result[indexItem] = zippedItem
    }

    return result
}

export function unzip(arr) {
    const numberOfItems = arr.length
    const numberOfArrays = Math.min(...map(length) (arr))

    const result = Array(numberOfArrays)
    for (let indexArray = 0; indexArray < numberOfArrays; indexArray++) {
        result[indexArray] = Array(numberOfItems)
    }

    for (let indexArray = 0; indexArray < numberOfArrays; indexArray++) {
        const resultArray = result[indexArray]

        for (let indexItem = 0; indexItem < numberOfItems; indexItem++) {
            resultArray[indexItem] = arr[indexItem][indexArray]
        }
    }

    return result
}

export function zipObject(as) {
    return bs => fromEntries(zip(as, bs))
}

export function arrayOf(...values) {
    return values
}

export function range(inclusiveStart) {
    return exclusiveEnd => {
        const size = exclusiveEnd - inclusiveStart
        const result = Array(size)

        for (let i = 0; i < size; i++) {
            result[i] = inclusiveStart + i
        }

        return result
    }
}

export function fill(value) {
    return n => {
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = value
        }

        return result
    }
}

export function repeat(n) {
    return f => {
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = f(i)
        }

        return result
    }
}