function isArray(input) {
    return Array.isArray(input)
}

function map(f) {
    return arr => arr.map(f)
}

function mapOf(arr) {
    return f => map(f)(arr)
}

function flatMap(f) {
    return arr => arr.flatMap(f)
}

function flatten(arr) {
    return arr.flat()
}

function filter(predicate) {
    return arr => arr.filter(predicate)
}

function fold(f) {
    return initialValue => arr => {
        let acc = initialValue

        for (let i = 0; i < arr.length; i++) {
            acc = f(acc, arr[i])
        }

        return acc
    }
}

function foldWhile(predicate) {
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

function unique(arr) {
    return arr.filter((item, index) => index === arr.indexOf(item))
}

function difference(as) {
    return bs => as.filter(a => !bs.includes(a))
}

function head(arr) {
    return arr[0]
}

function tail(arr) {
    let size = arr.length-1
    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = arr[i+1]
    }

    return res
}

function headAndTail(arr) {
    return [ head(arr), tail(arr) ]
}

function init(arr) {
    let size = arr.length-1

    const res = Array(size)

    for (let i = 0; i < size; i++) {
        res[i] = arr[i]
    }

    return res
}

function last(arr) {
    return arr[arr.length - 1]
}

function initAndLast(arr) {
    return [ init(arr), last(arr) ]
}

function find(predicate) {
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

function findIndex(predicate) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                return i
            }
        }
        return null
    }
}

function indexOf(item) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return i
            }
        }
        return null
    }
}

function partition(predicate) {
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

function maxBy(f) {
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

function chunk(size) {
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

function splitAt(position) {
    return arr => [ arr.slice(0, position), arr.slice(position) ]
}

function contains(item) {
    return arr => arr.includes(item)
}

function isContainedIn(arr) {
    return item => contains(item)(arr)
}

function containsAll(items) {
    return arr => {
        for (let i = 0; i < items.length; i++) {
            if (!arr.includes(items[i])) {
                return false
            }
        }

        return true
    }
}

function areContainedIn(arr) {
    return items => containsAll(items)(arr)
}

function all(p) {
    return arr => {
        for (let i = 0; i < arr.length; i += 1) {
            if (!p(arr[i])) {
                return false
            }
        }

        return true
    }
}

function any(p) {
    return arr => {
        for (let i = 0; i < arr.length; i += 1) {
            if (p(arr[i])) {
                return true
            }
        }

        return false
    }
}

function cartesianProduct(as) {
    return bs => {
        const aLength = as.length
        const bLength = bs.length

        const product = new Array(aLength * bLength)

        for (let i = 0; i < aLength; i += 1) {
            for (let j = 0; j < bLength; j += 1) {
                product[i * bLength + j] = [as[i], bs[j]]
            }
        }

        return product
    }
}

function zip(as) {
    return bs => {
        const aLength = as.length
        const bLength = bs.length

        const zipLength = Math.min(aLength, bLength)

        const result = new Array(zipLength)

        for (let i = 0; i < zipLength; i += 1) {
            result[i] = [as[i], bs[i]]
        }

        return result
    }
}

function arrayOf(...values) {
    return [ ...values ]
}

function range(inclusiveStart) {
    return exclusiveEnd => {
        const size = exclusiveEnd - inclusiveStart
        const result = Array(size)

        for (let i = 0; i < size; i++) {
            result[i] = inclusiveStart + i
        }

        return result
    }
}

module.exports = {
    isArray,

    map,
    mapOf,

    flatMap,
    flatten,

    filter,

    fold,
    foldWhile,

    head,
    first: head,
    tail,
    headAndTail,

    init,
    last,
    initAndLast,

    find,
    findIndex,
    indexOf,

    unique,
    difference,

    contains,
    isContainedIn,

    containsAll,
    areContainedIn,

    maxBy,

    partition,
    chunk,
    splitAt,

    cartesianProduct,
    zip,

    all,
    any,

    arrayOf,

    range
}