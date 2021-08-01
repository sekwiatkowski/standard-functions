import {is2DArray, isArray} from './array-functions'
import {isFunction} from './higher-order-functions'

export function isBoolean(input) {
    return input === false || input === true
}

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