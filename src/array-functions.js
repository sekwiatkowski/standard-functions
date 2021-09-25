import {first, isSingle, length} from './string-or-array-functions'
import {fromEntries, keys} from './object-functions'
import {identity, isFunction} from './higher-order-functions'
import {not} from './boolean-functions'

export function isArray(input) {
    return Array.isArray(input)
}

export function is2DArray(input) {
    return isArray(input) && isArray(input[0])
}

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

export function single(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            const results = input.filter(predicateOrInput)

            const numberOfResults = results.length

            if (numberOfResults === 0) {
                throw Error(`Expected a single search result. Found no matching items.`)
            }
            else if (numberOfResults > 1) {
                throw Error(`Expected a single search result. Found ${numberOfResults} matching items.`)
            }

            return results[0]
        }
    }
    else {
        const numberOfItems = predicateOrInput.length

        if (numberOfItems === 0) {
            throw Error(`Expected a single item. Found no items.`)
        }
        else if (numberOfItems > 1) {
            throw Error(`Expected a single item. Found ${numberOfItems} items.`)
        }

        return predicateOrInput[0]
    }
}

export function singleOrNull(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            const results = input.filter(predicateOrInput)

            const numberOfResults = results.length

            if (numberOfResults > 1) {
                throw Error(`Expected one or no search results. Found ${numberOfResults} matching items.`)
            }

            return results[0]
        }
    }
    else {
        const numberOfItems = predicateOrInput.length

         if (numberOfItems > 1) {
            throw Error(`Expected one or no items. Found ${numberOfItems} items.`)
        }

        return predicateOrInput[0]
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

export function contains(itemOrPredicate) {
    return (...itemsOrArray) => {
        if (isSingle(itemsOrArray)) {
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
        if (isSingle(itemsOrArray)) {
            const firstItem = first(itemsOrArray)

            if (isArray(firstItem)) {
                return contains(itemOrPredicate) (firstItem)
            }
        }

        return contains(itemOrPredicate) (...itemsOrArray)
    }
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

export function repeat(n) {
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

export function getItem(nth) {
    return arr => arr[nth]
}

export function setItem(nth) {
    return f => arr =>
        map((item, index) =>
            index === nth
                ? f(item)
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