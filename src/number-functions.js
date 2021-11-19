export function abs(value) {
    return Math.abs(value)
}

export function add(y) {
    return x => x + y
}

export function subtract(y) {
    return x => x - y
}

export function multiply(y) {
    return x => y * x
}

export const changeSign = multiply(-1)

export function divide(y) {
    return x => y / x
}

