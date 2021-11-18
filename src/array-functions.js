import {isEmpty, isOfLength, isSingle, length} from './string-or-array-functions'
import {fromEntries, keys} from './object-functions'
import {identity} from './higher-order-functions'
import {equals, none, not, some} from './boolean-functions'
import {isArray, isFunction, isNull, isNumber} from './type-functions'
import {first} from './single-access-functions'

export function forEach(f) {
    return arr => {
        arr.forEach(f)
    }
}

export function map(f) {
    return arr => arr.map(f)
}

export function mapNotNull(f) {
    return arr => {
        const result = []

        for (let i = 0; i < arr.length; i++) {
            const y = f(arr[i])

            if (y) {
                result.push(y)
            }
        }

        return result
    }
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

export function filterIndices(predicate) {
    return arr => {
        const indices = []

        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                indices.push(i)
            }
        }

        return indices
    }
}

export function exclude(predicate) {
    return arr => arr.filter(not(predicate))
}

export function excludeNull(input) {
    if (isSingle(arguments)) {
        if (isNull(input)) {
            return []
        }
        else if (isArray(input)) {
            return exclude(isNull) (input)
        }
        else {
            return [input]
        }
    }
    else {
        return excludeNull(Array.prototype.slice.call(arguments))
    }
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

export function reduce(f) {
    return arr => {
        let acc = arr[0]

        for (let i = 1; i < arr.length; i++) {
            acc = f(acc, arr[i], i)
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

export function intersect(A) {
    return B => {
        const uniqueA = unique(A)
        const uniqueB = unique(B)

        const result = []

        for (const a of uniqueA) {
            for (const b of uniqueB) {
                if (a === b) {
                    result.push(a)
                }
            }
        }

        return result
    }
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

export function singleIndex(predicate) {
    return arr => {
        const matches = []
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                matches.push(i)
            }
        }

        const numberOfResults = matches.length

        if (numberOfResults === 0) {
            throw Error(`Expected a single search result. Found no ${numberOfResults} matching items.`)
        }
        else if (numberOfResults > 1) {
            throw Error(`Expected a single search result. Found ${numberOfResults} matching items.`)
        }

        return matches[0]
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

export function groupEntriesBy(computeKey, deserializeKey = identity) {
    return arr => {
        const grouped = groupBy(computeKey) (arr)

        const groupKeys = keys(grouped)

        const deserializedGroupKeys = map(deserializeKey) (groupKeys)

        return map(([ key, deserialized]) =>
            [deserialized, grouped[key]]
        ) (zip(groupKeys, deserializedGroupKeys))
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

export function contains(item) {
    return arr => some(equals(item)) (arr)
}

export function isContainedIn(arr) {
    return item => contains(item) (arr)
}

export function doesNotContain(item) {
    return arr => none(equals(item)) (arr)
}

export function isNotContainedIn(arr) {
    return item => doesNotContain(item) (arr)
}

export function containsAll(...candidateItemsOrArray) {
    if (isSingle(candidateItemsOrArray)) {
        const firstCandidateItem = first(candidateItemsOrArray)
        if (isArray(firstCandidateItem)) {
            return containsAll(...firstCandidateItem)
        }
    }

    return (...itemsOrArray) => {
        if (isSingle(itemsOrArray)) {
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
    if (isSingle(input)) {
        const arrayOfArrays = input[0]

        /// zip([ arr_1 ])
        if (!isSingle(arrayOfArrays)) {
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
        return steps(inclusiveStart) (exclusiveEnd) (1)
    }
}

export function inclusiveRange(inclusiveStart) {
    return inclusiveEnd => {
        return range(inclusiveStart) (inclusiveEnd+1)
    }
}

export function steps(inclusiveStart) {
    return exclusiveEnd => stepSize => {
        const size = Math.ceil((exclusiveEnd - inclusiveStart) / stepSize)

        if (size < 1) {
            return []
        }

        const result = Array(size)

        for (let i = 0, current = inclusiveStart; i < size; i++, current += stepSize) {
            result[i] = current
        }

        return result
    }
}

export function inclusiveSteps(inclusiveStart) {
    return inclusiveEnd => stepSize => steps(inclusiveStart) (inclusiveEnd+1) (stepSize)
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

export function loop(n) {
    return f => {
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = f(i)
        }

        return result
    }
}

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

export function indices(arr) {
    const n = arr.length
    const result = Array(n)

    for (let i = 0; i < n; i++) {
        result[i] = i
    }

    return result
}

export function lastIndex(arr) {
    return arr.length-1
}

export function slice(indices) {
    return arr => {
        const n = length(indices)
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = arr[indices[i]]
        }

        return result
    }
}

export function setItem(index) {
    return itemOrFunction => arr =>
        map((item, itemIndex) =>
            itemIndex === index
                ? isFunction(itemOrFunction) ? itemOrFunction(item) : itemOrFunction
                : item
        ) (arr)
}

export function containsSublist(sublist) {
    return arr => {
        for (const item of sublist) {
            if (!arr.includes(item)) {
                return false
            }
        }

        return true
    }
}

export function isSublistOf(arr) {
    return sublist => containsSublist(sublist) (arr)
}

export function swap(first) {
    return second => arr => {
        if (first >= second) {
            throw Error('The second index must be greater than the first index.')
        }

        const beforeFirst = arr.slice(0, first)
        const between = arr.slice(first+1, second)
        const afterSecond = arr.slice(second+1)

        return [
            ...beforeFirst,
            arr[second],
            ...between,
            arr[first],
            ...afterSecond
        ]
    }
}

export function sort(arr) {
    const copy = arr.slice()

    if (isEmpty(arr)) {
        return copy
    }

    if (isNumber(arr[0])) {
        return copy.sort((a, b) => a - b)
    }

    return copy.sort()
}

export function sortDescendingly(arr) {
    const copy = arr.slice()

    if (isEmpty(arr)) {
        return copy
    }

    if (isNumber(arr[0])) {
        return copy.sort((a, b) => -(a - b))
    }

    return copy.sort((a, b) => (a > b ? -1 : 1))
}

export function sortBy(f) {
    return arr => arr.slice().sort((a, b) => f(a) - f(b))
}

export function sortDescendinglyBy(f) {
    return arr => arr.slice().sort((a, b) => -(f(a) - f(b)))
}

export function count(itemOrPredicate) {
    return arr => {
        let counter = 0

        const predicate = isFunction(itemOrPredicate)
            ? itemOrPredicate
            : equals(itemOrPredicate)

        for (const item of arr) {
            if (predicate(item)) {
                counter += 1
            }
        }

        return counter
    }
}

export function before(indexOrPredicate) {
    return arr => {
        const index = isFunction(indexOrPredicate) ? findIndex(indexOrPredicate) (arr) : indexOrPredicate

        if (isNull(index)) {
            return []
        }

        return slice(range(0) (index)) (arr)
    }
}

export function after(indexOrPredicate) {
    return arr => {
        const index = isFunction(indexOrPredicate) ? findIndex(indexOrPredicate) (arr) : indexOrPredicate

        if (isNull(index)) {
            return []
        }

        return slice(range(index+1) (length(arr))) (arr)
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
        const index = isFunction(indexOrPredicate) ? findIndex(indexOrPredicate) (arr) : indexOrPredicate

        if (isNull(index)) {
            return []
        }

        return slice(inclusiveRange(0) (index)) (arr)
    }
}

export function intersperse(interspersion) {
    return arr => {
        if (isEmpty(arr) || isOfLength(1) (arr)) {
            return [...arr]
        }

        const arrLength = length(arr)

        const newSize = 2 * arrLength - 1

        const result = new Array(newSize)

        let indexArray = 0
        while(indexArray < arrLength) {
            result[2 * indexArray] = arr[indexArray]

            indexArray++
        }

        let indexInterspersion = 1
        while(indexInterspersion < newSize - 1) {
            result[indexInterspersion] = interspersion

            indexInterspersion += 2
        }

        return result
    }
}
