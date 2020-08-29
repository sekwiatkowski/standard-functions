const {isFunction} = require('./higher-order-functions')

function equals(b) {
    return a => a === b
}

function greaterThan(value) {
    return x => x > value
}

function lessThan(value) {
    return x => x < value
}

function not(predicate) {
    return x => !predicate(x)
}

function anyPass(predicates) {
    return (x, i_x) => {
        for(let i_p = 0; i_p < predicates.length; i_p++) {
            if (predicates[i_p](x, i_x)) {
                return true
            }
        }

        return false
    }
}

function allPass(...predicates) {
    return (x, i_x) => {
        for(let i_p = 0; i_p < predicates.length; i_p++) {
            if (!predicates[i_p](x, i_x)) {
                return false
            }
        }

        return true
    }
}

function onlyIf(predicate) {
    return f => input => predicate(input) ? f(input) : input
}

function ifElse(predicate) {
    return ifTrue => ifFalse => input => predicate(input) ? ifTrue : ifFalse
}

function match(pairs) {
    return input => {
        for (let i = 0; i < pairs.length; i++) {
            const [ predicate, transformer ] = pairs[i]

            if (predicate(input)) {
                return isFunction(transformer) ? transformer(input) : transformer
            }
        }
    }
}

module.exports = {
    not,

    equals,
    greaterThan,
    lessThan,

    or,
    and,

    onlyIf,
    ifElse,
    match
}
