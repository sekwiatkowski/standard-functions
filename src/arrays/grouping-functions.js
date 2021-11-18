import {identity} from '../higher-order-functions'
import {keys} from '../object-functions'
import {map} from './mapping-functions'
import {zip} from '../array-functions'

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
            } else {
                groups[key].push(item)
            }
        }

        return groups
    }
}

export function groupEntriesBy(computeKey, deserializeKey = identity) {
    return arr => {
        const grouped = groupBy(computeKey)(arr)

        const groupKeys = keys(grouped)

        const deserializedGroupKeys = map(deserializeKey)(groupKeys)

        return map(([key, deserialized]) =>
            [deserialized, grouped[key]]
        )(zip(groupKeys, deserializedGroupKeys))
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
    return arr => [arr.slice(0, position), arr.slice(position)]
}