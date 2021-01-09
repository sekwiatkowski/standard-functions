export function add(x) {
    return y => x + y
}

export function multiply(x) {
    return y => x * y
}

export function greaterThan(value) {
    return x => x > value
}

export function lessThan(value) {
    return x => x < value
}