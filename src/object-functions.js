function isObject(input) {
    return typeof input === 'object'
}

function associate(f) {
    return items => {
        const res = {}

        for (let i = 0; i < items.length; i++) {
            const [key, value] = f(items[i])
            res[key] = value
        }

        return res
    }
}

function associateWith(f) {
    return items => {
        const res = {}

        for (let i = 0; i < items.length; i++) {
            const key = items[i]
            res[key] = f(key)
        }

        return res
    }
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

function mapKeys(f) {
    return obj => {
        const result = {}

        const keys = Object.keys(obj)

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            const value = obj[key]
            result[f(key)] = value
        }

        return result
    }
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
        const entries = Object.entries(obj)
        const numberOfEntries = entries.length

        const result = Array(numberOfEntries)

        for (let index = 0; index < numberOfEntries; index++) {
            const [key, value] = entries[index]
            result[index] = f([key, value])
        }

        return result
    }
}

function mapObject(f) {
    return obj => {
        const entries = Object.entries(obj)
        const numberOfEntries = entries.length

        const result = {}

        for (let index = 0; index < numberOfEntries; index++) {
            const [key, value] = entries[index]
            result[key] = f([key, value])
        }

        return result
    }
}

function addProperty(key) {
    return value => obj => ({...obj, [key]: value})
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

/*
    {
        a: 1,
        b: {
            c: 2
            d: 3
        },
        e: {
            f: {
                g: 4
            }
        }
    }
 */
function flattenObject(unflattened, parent = '', flattened = {}) {
    const unflattenedKeys = Object.keys(unflattened)

    for (let indexKey = 0; indexKey < unflattenedKeys.length; indexKey++) {
        const key = unflattenedKeys[indexKey]
        const value = unflattened[key]

        if (isObject(value)) {
            flattenObject(value, parent + key + '.', flattened)
        }
        else {
            const path = parent + key
            flattened[path] = value
        }
    }

    return flattened
}

/*
    {
        'a': 1,
        'b.c': 2,
        'b.d': 3,
        'e.f.g': 4
    }

    {
        a: 1,
        b: {
            c: 2
            d: 3
        },
        e: {
            f: {
                g: 4
            }
        }
    }
 */
function unflattenObject(flattened) {
    const unflattened = {}

    const flattenedKeys = Object.keys(flattened)

    for (let indexKey = 0; indexKey < flattenedKeys.length; indexKey++) {
        const key = flattenedKeys[indexKey]
        const value = flattened[key]
        const fragments = key.split('.')
        const numberOfFragments = fragments.length

        let current = unflattened

        for (let indexFragment = 0; indexFragment < numberOfFragments-1; indexFragment++) {
            const fragment = fragments[indexFragment]

            if (!current.hasOwnProperty(fragment)) {
                current[fragment] = {}
            }

            current = current[fragment]
        }

        current[fragments[numberOfFragments-1]] = value
    }

    return unflattened
}

module.exports = {
    isObject,

    associate,
    associateWith,

    keys,
    values,
    entries,

    mapKeys,
    mapValues,
    mapEntries,
    mapObject,

    addProperty,

    hasProperty,
    isPropertyOf,

    property,
    propertyOf,
    properties,
    propertiesOf,

    keyValue,

    merge,
    mergeWith,

    pick,

    flattenObject,
    unflattenObject
}