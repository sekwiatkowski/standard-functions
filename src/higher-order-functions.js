import {isSingle} from './string-or-array-functions'
import {isArray, single} from './array-functions'

export function isFunction(input) {
    return typeof input === 'function'
}

export function apply(arg) {
    return f => f(arg)
}

export function applyTo(f) {
    return x => f(x)
}

export function applyPair([a, b]) {
    return f => f(a)(b)
}

export function applyPairTo(f) {
    return ([a, b]) => f(a) (b)
}

export function compose(...functionsOrArray) {
    if (isSingle(functionsOrArray)) {
        const singleItem = single(functionsOrArray)

        if (isArray(singleItem)) {
            return compose(...singleItem)
        }
    }

    return x => functionsOrArray.reduce((acc, f) => f(acc), x)
}

export function identity(x) {
    return x
}

export function constant(x) {
    return () => x
}
