import {isFunction} from './higher-order-functions'

export function equals(b) {
    return a => a === b
}

export function greaterThan(value) {
    return x => x > value
}

export function lessThan(value) {
    return x => x < value
}

export function not(predicate) {
    return x => !predicate(x)
}

export function anyPass(predicates) {
    return x => {
        for(let i_p = 0; i_p < predicates.length; i_p++) {
            if (predicates[i_p](x)) {
                return true
            }
        }

        return false
    }
}

export function allPass(predicates) {
    return x => {
        for(let i_p = 0; i_p < predicates.length; i_p++) {
            if (!predicates[i_p](x)) {
                return false
            }
        }

        return true
    }
}

export function onlyIf(predicate) {
    return f => input => predicate(input) ? f(input) : input
}

export function ifElse(predicate) {
    return ifTrue => ifFalse => input => predicate(input) ? ifTrue(input) : ifFalse(input)
}

export function match(pairs) {
    return input => {
        for (let i = 0; i < pairs.length; i++) {
            const [ predicate, transformer ] = pairs[i]

            if (predicate(input)) {
                return isFunction(transformer) ? transformer(input) : transformer
            }
        }
    }
}
