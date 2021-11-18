import {is2DArray, isFunction} from './type-functions'

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