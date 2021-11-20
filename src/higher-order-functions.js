import {isArray} from './type-functions'
import {isSingle} from './collections/length-functions'
import {single} from './arrays/search-functions'

export function applyTo(x) {
    return f => f(x)
}

export function applyPair([a, b]) {
    return f => f(a) (b)
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
