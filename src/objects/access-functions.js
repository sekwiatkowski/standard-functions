import {isSingle} from '../collections/length-functions'
import {first, single} from '../collections/single-access-functions'
import {isArray} from '../type-functions'

export function keys(obj) {
    return Object.keys(obj)
}

export function values(obj) {
    return Object.values(obj)
}

export function entries(obj) {
    return Object.keys(obj)
        .map(key => [key, obj[key]])
}

export function property(key, defaultValue) {
    return obj => obj.hasOwnProperty(key) ? obj[key] : defaultValue
}

export function propertyOf(obj, defaultValue) {
    return key => property(key, defaultValue)(obj)
}

export function properties(...keys) {
    return obj => {
        if (isSingle(keys)) {
            const singleItem = single(keys)

            if (isArray(singleItem)) {
                return properties(...singleItem)(obj)
            }
        }

        const result = []

        for (let i = 0; i < keys.length; i++) {
            result[i] = obj[keys[i]]
        }

        return result
    }
}

export function propertiesOf(obj) {
    return keys => properties(keys)(obj)
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