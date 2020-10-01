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

export function compose() {
    const arr = Array.prototype.slice.call(arguments)

    return x => arr.reduce((acc, f) => f(acc), x)
}

export function perform(f) {
    return x => {
        f(x)
        return x
    }
}

export function identity(x) {
    return x
}

export function constant(x) {
    return () => x
}