export function isArray(input) {
    return Array.isArray(input)
}

export function map(f) {
    return arr => arr.map(x => f(x))
}

export function mapIndexed(f) {
    return arr => arr.map((x, i) => f(x, i))
}

export function flatMap(f) {
    return arr => arr.flatMap(x => f(x))
}

export function flatMapIndexed(f) {
    return arr => arr.flatMap((x, i) => f(x, i))
}

export function flatten(arr) {
    return arr.flat()
}

export function filter(predicate) {
    return arr => arr.filter(x => predicate(x))
}

export function filterIndexed(predicate) {
    return arr => arr.filter((x, i) => predicate(x, i))
}

export function fold(f) {
    return initialValue => arr => {
        let acc = initialValue

        for (let i = 0; i < arr.length; i++) {
            acc = f(acc, arr[i])
        }

        return acc
    }
}

export function foldIndexed(f) {
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

export function single(predicate) {
    return arr => {
        const results = filter(predicate)(arr)
        const numberOfResults = results.length

        if (numberOfResults === 1) {
            return results[0]
        }
        else {
            throw Error (`Expected a single search result. Found ${numberOfResults} items.`)
        }
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
    return arr => arr.includes(item)
}

export function isContainedIn(arr) {
    return item => contains(item)(arr)
}

export function containsAll(items) {
    return arr => {
        for (let i = 0; i < items.length; i++) {
            if (!arr.includes(items[i])) {
                return false
            }
        }

        return true
    }
}

export function areContainedIn(arr) {
    return items => containsAll(items)(arr)
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

export function zip(as) {
    return bs => {
        const aLength = as.length
        const bLength = bs.length

        const zipLength = Math.min(aLength, bLength)

        const result = new Array(zipLength)

        for (let i = 0; i < zipLength; i++) {
            result[i] = [as[i], bs[i]]
        }

        return result
    }
}

export function unzip(arr) {
    const numberOfItems = arr.length

    const first = new Array(numberOfItems)
    const second = new Array(numberOfItems)

    for (let i = 0; i < numberOfItems; i++) {
        const item = arr[i]

        first[i] = item[0]
        second[i] = item[1]
    }

    return [first, second]
}

export function zipObject(as) {
    return bs => {
        const aLength = as.length
        const bLength = bs.length

        const zipLength = Math.min(aLength, bLength)

        const result = {}

        for (let i = 0; i < zipLength; i++) {
            result[as[i]] = bs[i]
        }

        return result
    }
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

export function fill(n) {
    return value => {
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