import {is2DArray, isFunction} from '../type-functions'
import {equals} from './equality-functions'

export function merge(...cases) {
    const firstItem = cases[0]
    if (is2DArray(firstItem)) {
        return merge(...firstItem)
    }

    return defaultFunctionOrValue => input => {
        for (const [condition, valueOrFunction] of cases) {
            const isMatched = (isFunction(condition) && condition(input)) || equals(condition)(input)

            if (isMatched) {
                if (isFunction(valueOrFunction)) {
                    return valueOrFunction(input)
                } else {
                    return valueOrFunction
                }
            }
        }

        if (isFunction(defaultFunctionOrValue)) {
            return defaultFunctionOrValue(input)
        } else {
            return defaultFunctionOrValue
        }
    }
}

export function ifElse(condition) {
    return ifBlock => elseBlock => condition ? ifBlock() : elseBlock()
}
