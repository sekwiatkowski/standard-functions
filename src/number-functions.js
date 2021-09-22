import {fold} from './array-functions'
import {identity} from './higher-order-functions'

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

export function isNumber(input) {
    return typeof input === 'number'
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

export const sum = sumBy(identity)

export function productBy(f) {
    return xs => fold((acc, x) => acc * f(x)) (1) (xs)
}

export const product = productBy(identity)