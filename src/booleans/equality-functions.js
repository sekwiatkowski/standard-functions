export function isFalse(input) {
    return input === false
}

export function isTrue(input) {
    return input === true
}

export function equals(a) {
    return b => a === b
}

export function doesNotEqual(a) {
    return b => a !== b
}

export function isGreaterThan(a) {
    return b => b > a
}

export function isGreaterThanOrEqualTo(a) {
    return b => b >= a
}

export function isLessThan(a) {
    return b => b < a
}

export function isLessThanOrEqualTo(a) {
    return b => b <= a
}

export function isBetween(start) {
    return end => x => start <= x && x < end
}