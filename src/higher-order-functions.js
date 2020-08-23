function apply(arg) {
    return f => f(arg)
}

function applyTo(f) {
    return x => f(x)
}

function applyPair([a, b]) {
    return f => f(a)(b)
}

function applyPairTo(f) {
    return ([a, b]) => f(a) (b)
}

function compose() {
    const arr = Array.prototype.slice.call(arguments)

    return x => arr.reduce((acc, f) => f(acc), x)
}

function perform(f) {
    return x => {
        f(x)
        return x
    }
}

function identity(x) {
    return x
}

function constant(x) {
    return () => x
}

module.exports = {
    applyPair,
    applyPairTo,

    apply,
    applyTo,

    compose,
    perform,

    identity,
    constant
}