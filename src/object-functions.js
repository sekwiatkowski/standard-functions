function isObject(input) {
    return typeof input === 'object'
}

function hasProperty(key) {
    return obj => obj.hasOwnProperty(key)
}

function isPropertyOf(obj) {
    return key => obj.hasOwnProperty(key)
}

function property(key) {
    return obj => obj[key]
}

function properties(keys) {
    return obj => {
        const result = []

        for (let i = 0; i < keys.length; i++) {
            result[i] = obj[keys[i]]
        }

        return result
    }
}

function propertyOf(obj) {
    return key => property(key)(obj)
}

function propertiesOf(obj) {
    return keys => properties(keys)(obj)
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
        const result = {}

        const keys = Object.keys(obj)
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            const value = obj[key]
            result[key] = f(value)
        }

        return result
    }
}

function mapEntries(f) {
    return obj => {
        const keys = Object.keys(obj)

        const numberOfEntries = keys.length
        const result = Array(numberOfEntries)

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            const value = obj[key]
            result[index] = f([key, value])
        }

        return result
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
    mapEntries,

    hasProperty,
    isPropertyOf,

    property,
    propertyOf,
    properties,
    propertiesOf,

    keyValue,

    merge,
    mergeWith,

    pick
}