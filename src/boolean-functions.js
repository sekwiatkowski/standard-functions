export function isBoolean(input) {
    return input === true || input === false
}

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