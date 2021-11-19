import {not} from '../booleans/negation-functions'

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