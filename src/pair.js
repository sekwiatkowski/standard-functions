function pair(a) {
    return b => [a, b]
}

function duplicate(a) {
    return [a, a]
}

function pairWith(b) {
    return a => [a, b]
}

function pairBy(f) {
    return x => [x, f(x)]
}

function mapFirst(f) {
    return ([a, b]) => [f(a), b]
}

function mapSecond(g) {
    return ([a, b]) => [a, g(b)]
}

function bimap(f, g) {
    return ([a, b]) => [f(a), g(b)]
}

function mapPair(g) {
    return ([a, b]) => [a, g(a, b)]
}

function first([a, _]) {
    return a
}

function second([_, b]) {
    return b
}

module.exports = {
    pair,
    duplicate,
    pairWith,
    pairBy,
    mapFirst,
    mapSecond,
    bimap,
    mapPair,
    first,
    second
}