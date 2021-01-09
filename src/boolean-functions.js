import {isArray} from './array-functions'

export function isBoolean(input) {
    return input === true || input === false
}

export function equals(b) {
    return a => a === b
}

export function not(predicate) {
    return x => !predicate(x)
}

export function anyPass(...predicates) {
    const firstItem = predicates[0]
    if (isArray(firstItem)) {
        return anyPass(...firstItem)
    }

    return x => {
        for(let i = 0; i < predicates.length; i++) {
            if (predicates[i](x)) {
                return true
            }
        }

        return false
    }
}

export function allPass(...predicates) {
    const firstItem = predicates[0]
    if (isArray(firstItem)) {
        return allPass(...firstItem)
    }

    return x => {
        for(let i = 0; i < predicates.length; i++) {
            if (!predicates[i](x)) {
                return false
            }
        }

        return true
    }
}