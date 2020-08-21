function isObject(candidate) {
    return typeof candidate === 'object'
}

function get(key) {
    return obj => obj[key]
}

function getFrom(obj) {
    return key => obj[key]
}

function keys (obj) {
    return Object.keys(obj)
}

function values (obj) {
    return Object.values(obj)
}

function entries (obj) {
    return Object.keys(obj)
        .map(key => [ key, obj[key] ])
}

function mapValues(f) {
    return obj => {
        const mapped = {}

        const keys = Object.keys(obj)
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            const value = obj[key]
            mapped[key] = f(value)
        }

        return mapped
    }
}

function merge(a) {
    return b => ({...a, ...b})
}

function mergeWith(f) {
    return a => b => {
        const merged = {}

        const keysInA = Object.keys(a)
        for (let indexA = 0; indexA < keysInA.length; indexA++) {
            const keyInA = keysInA[indexA]

            if (b.hasOwnProperty(keyInA)) {
                merged[keyInA] = f(a[keyInA])(b[keyInA])
            }
            else {
                merged[keyInA] = a[keyInA]
            }
        }

        const keysInB = Object.keys(b)
        for (let indexB = 0; indexB < keysInB.length; indexB++) {
            const keyInB = keysInB[indexB]

            if (!merged.hasOwnProperty(keyInB)) {
                merged[keyInB] = b[keysInB]
            }
        }

        return merged
    }
}

function pick(keys) {
    return obj => {
        const partialObject = {}

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            partialObject[key] = obj[key]
        }

        return partialObject
    }
}

function keyValue(key) {
    return value => ({[key]: value})
}

module.exports = {
    isObject,

    keys,
    values,
    entries,

    mapValues,

    get,
    getFrom,

    keyValue,

    merge,
    mergeWith,

    pick
}