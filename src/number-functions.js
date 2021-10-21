import {fold} from './array-functions'
import {identity} from './higher-order-functions'

export function isNumber(input) {
    return typeof input === 'number'
}

export function greaterThan(value) {
    return x => x > value
}

export function lessThan(value) {
    return x => x < value
}

export function isBetween(start) {
    return end => x => start <= x && x < end
}

export function min(arr) {
    if (arguments.length > 1) {
        return Math.min(...Array.prototype.slice.call(arguments))
    }

    return Math.min(...arr)
}

export function max(arr) {
    if (arguments.length > 1) {
        return Math.max(...Array.prototype.slice.call(arguments))
    }

    return Math.max(...arr)
}

export function sumBy(f) {
    return xs => fold((acc, x) => acc + f(x)) (0) (xs)
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

export const sum = sumBy(identity)

export function productBy(f) {
    return xs => fold((acc, x) => acc * f(x)) (1) (xs)
}

export const product = productBy(identity)