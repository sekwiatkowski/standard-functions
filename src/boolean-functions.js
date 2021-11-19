import {is2DArray, isFunction} from './type-functions'
import {equals} from './booleans/equality-functions'

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