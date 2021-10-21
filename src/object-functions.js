import {fold, isArray, single} from './array-functions.js'
import {not} from './boolean-functions.js'
import {isFunction} from './higher-order-functions.js'
import {first, isSingle} from './string-or-array-functions'
import {isNull} from './null-functions'

export function isObject(input) {
    return typeof input === 'object'
}

export function associate(f) {
    return items => {
        const obj = {}

        for (const item of items) {
            const [key, value] = f(item)
            obj[key] = value
        }

        return obj
    }
}

export function associateBy(f) {
    return values => {
        const obj = {}

        for (const value of values) {
            obj[f(value)] = value
        }

        return obj
    }
}

export function associateWith(f) {
    return keys => {
        const obj = {}

        for (const key of keys) {
            obj[key] = f(key)
        }

        return obj
    }
}

export function hasProperty(key) {
    return obj => obj.hasOwnProperty(key)
}

export function isPropertyOf(obj) {
    return key => obj.hasOwnProperty(key)
}

export function property(key, defaultValue) {
    return obj => obj.hasOwnProperty(key) ? obj[key] : defaultValue
}

export function propertyOf(obj, defaultValue) {
    return key => property(key, defaultValue) (obj)
}

export function properties(keys) {
    return obj => {
        const result = []

        for (let i = 0; i < keys.length; i++) {
            result[i] = obj[keys[i]]
        }

        return result
    }
}

export function propertiesOf(obj) {
    return keys => properties(keys) (obj)
}

export function propertyEquals(property) {
    return value => obj => obj[property] === value
}

export function setProperty(key) {
    return valueOrFunction => obj => ({
      ...obj,
      [key]: isFunction(valueOrFunction) ? valueOrFunction(obj[key]) : valueOrFunction
    })
}

export function keys (obj) {
    return Object.keys(obj)
}

export function values (obj) {
    return Object.values(obj)
}

export function entries (obj) {
    return Object.keys(obj)
        .map(key => [ key, obj[key] ])
}

export function mapKeys(f) {
    return obj => {
        const result = {}

        const keys = Object.keys(obj)

        for (const key of keys) {
            result[f(key)] = obj[key]
        }

        return result
    }
}

export function mapValues(f) {
    return obj => {
        const result = {}

        const keys = Object.keys(obj)

        for (const key of keys) {
            const value = obj[key]
            result[key] = f(value)
        }

        return result
    }
}

export function mapEntries(f) {
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

export function mapObject(f) {
    return obj => {
        const result = {}

        const entries = Object.entries(obj)
        for (const entry of entries) {
            const [key, value] = entry
            result[key] = f([key, value])
        }

        return result
    }
}

export function filterKeys(predicate) {
    return obj => {
        const result = {}

        const entries = Object.entries(obj)
        for (const entry of entries) {
            const [key, value] = entry

            if (predicate(key)) {
                result[key] = value
            }
        }

        return result
    }
}

export function excludeKeys(predicate) {
    return filterKeys(not(predicate))
}

export function filterValues(predicate) {
    return obj => {
        const result = {}

        const entries = Object.entries(obj)
        for (const entry of entries) {
            const [key, value] = entry

            if (predicate(value)) {
                result[key] = value
            }
        }

        return result
    }
}

export function excludeValues(predicate) {
    return filterValues(not(predicate))
}

export function merge(...firstOrArray) {
    if (isSingle(firstOrArray)) {
        const singleItem = single(firstOrArray)

        if (isArray(singleItem)) {
            return merge(...singleItem)
        }
        else if (isObject(singleItem)) {
            return singleItem
        }
        else if (isNull(singleItem)) {
            return {}
        }
        else {
            throw Error(`Expected either an array or an object or null. Received: ${singleItem}`)
        }
    }
    else {
       return fold((acc, obj) =>
           (obj === null || obj === undefined)
               ? acc
               : {...acc, ...obj}
       ) ({}) (firstOrArray)
    }
}

export function mergeWith(f) {
    return (...firstOrArray) => {
        if (isSingle(firstOrArray)) {
            const singleItem = single(firstOrArray)

            if (isArray(singleItem)) {
                return merge(...singleItem)
            }
        else if (isObject(singleItem)) {
                return singleItem
            }
        }
        else {
            return fold((acc, item) => {
                if (item === null || item === undefined) {
                    return acc
                }

                const merged = {...acc}

                for (const [itemKey, itemValue] of Object.entries(item)) {
                    merged[itemKey] = acc.hasOwnProperty(itemKey)
                        ? f(acc[itemKey])(itemValue)
                        : itemValue
                }

                return merged

            }) ({}) (firstOrArray)
        }
    }
}

export function omit(...omittedKeys) {
    if (isSingle(omittedKeys)) {
        const firstItem = first(omittedKeys)

        if (isArray(firstItem)) {
            return omit(...firstItem)
        }
    }

    return obj => {
        const partialObject = {}

        const keys = Object.keys(obj)

        for (const key of keys) {
            if (!omittedKeys.includes(key)) {
                partialObject[key] = obj[key]
            }
        }

        return partialObject
    }
}

export function pick(...keys) {
    if (isSingle(keys)) {
        const firstItem = first(keys)

        if (isArray(firstItem)) {
            return pick(...firstItem)
        }
    }

    return obj => {
        const partialObject = {}

        for (const key of keys) {
            if (obj.hasOwnProperty(key)) {
                partialObject[key] = obj[key]
            }
        }

        return partialObject
    }
}

export function pickAll(...keys) {
    if (isSingle(keys)) {
        const firstItem = first(keys)

        if (isArray(firstItem)) {
            return pick(...firstItem)
        }
    }

    return obj => {
        const partialObject = {}

        for (const key of keys) {
            partialObject[key] = obj[key]
        }

        return partialObject
    }
}

export function fromProperty(key) {
    return value => ({[key]: value})
}

export function fromEntry([key, value]) {
    return {[key]: value}
}

export function fromEntries(entries) {
    return Object.fromEntries(entries)
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
export function flattenObject(unflattened, stopCondition = not(isObject), parent = '', flattened = {}) {
    const unflattenedKeys = Object.keys(unflattened)

    for (const key of unflattenedKeys) {
        const value = unflattened[key]

        if (stopCondition(value)) {
            const path = parent + key
            flattened[path] = value
        }
        else {
            flattenObject(value, stopCondition, parent + key + '.', flattened)
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
export function unflattenObject(flattened) {
    const unflattened = {}

    const flattenedKeys = Object.keys(flattened)

    for (const key of flattenedKeys) {
        const value = flattened[key]
        const fragments = key.split('.')
        const numberOfFragments = fragments.length

        let current = unflattened

        for (let indexFragment = 0; indexFragment < numberOfFragments - 1; indexFragment++) {
            const fragment = fragments[indexFragment]

            if (!current.hasOwnProperty(fragment)) {
                current[fragment] = {}
            }

            current = current[fragment]
        }

        current[fragments[numberOfFragments - 1]] = value
    }

    return unflattened
}

export function reverseObject(input) {
    const reversed = {}

    const entries = Object.entries(input)

    for (const entry of entries) {
        reversed[entry[1]] = entry[0]
    }

    return reversed
}