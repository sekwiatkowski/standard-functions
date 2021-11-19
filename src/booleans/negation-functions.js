export function not(predicate) {
    return x => !predicate(x)
}

export function negate(value) {
    return !value
}