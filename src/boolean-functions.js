import {is2DArray, isArray, isFunction} from './type-functions'

export function isFalse(input) {
    return input === false
}

export function isTrue(input) {
    return input === true
}

export function equals(a) {
    return b => a === b
}

export function doesNotEqual(a) {
    return b => a !== b
}

export function isGreaterThan(a) {
    return b => b > a
}

export function isGreaterThanOrEqualTo(a) {
    return b => b >= a
}

export function isLessThan(a) {
    return b => b < a
}

export function isLessThanOrEqualTo(a) {
    return b => b <= a
}

export function not(predicate) {
    return x => !predicate(x)
}

export function negate(value) {
    return !value
}

export function all(predicate) {
    return (...itemsOrArray) => {
        const items = itemsOrArray.length === 1 && isArray(itemsOrArray[0])
            ? itemsOrArray[0]
            : itemsOrArray

        for (const item of items) {
            if (!predicate(item)) {
                return false
            }
        }
        return true
    }
}

export const allTrue = all(isTrue)

export function some(predicate) {
    return (...itemsOrArray) => {
        const items = itemsOrArray.length === 1 && isArray(itemsOrArray[0])
            ? itemsOrArray[0]
            : itemsOrArray

        for (const item of items) {
            if (predicate(item)) {
                return true
            }
        }
        return false
    }
}

export const someTrue = some(isTrue)

export function none(predicate) {
    return (...itemsOrArray) => {
        const items = itemsOrArray.length === 1 && isArray(itemsOrArray[0])
            ? itemsOrArray[0]
            : itemsOrArray

        for (const item of items) {
            if (predicate(item)) {
                return false
            }
        }
        return true
    }
}

export function allPass(...predicates) {
    const firstItem = predicates[0]
    if (isArray(firstItem)) {
        return allPass(...firstItem)
    }

    return items => {
        for(let i = 0; i < predicates.length; i++) {
            if (!predicates[i] (items)) {
                return false
            }
        }

        return true
    }
}

export function allFail(...predicates) {
    const firstItem = predicates[0]
    if (isArray(firstItem)) {
        return allPass(...firstItem)
    }

    return items => {
        for(let i = 0; i < predicates.length; i++) {
            if (predicates[i] (items)) {
                return false
            }
        }

        return true
    }
}

export function somePass(...predicates) {
    const firstItem = predicates[0]
    if (isArray(firstItem)) {
        return somePass(...firstItem)
    }

    return items => {
        for(let i = 0; i < predicates.length; i++) {
            if (predicates[i] (items)) {
                return true
            }
        }

        return false
    }
}

export function alwaysTrue() {
    return true
}

export function alwaysFalse() {
    return false
}

export function match(...cases) {
    const firstItem = cases[0]
    if (is2DArray(firstItem)) {
        return match(...firstItem)
    }

    return defaultFunctionOrValue => input => {
        for(const [ condition, valueOrFunction ] of cases) {
            const isMatched = (isFunction(condition) && condition(input)) || equals(condition) (input)

            if (isMatched) {
                if (isFunction(valueOrFunction)) {
                    return valueOrFunction(input)
                }
                else {
                    return valueOrFunction
                }
            }
        }

        if (isFunction(defaultFunctionOrValue)) {
            return defaultFunctionOrValue(input)
        }
        else {
            return defaultFunctionOrValue
        }
    }
}