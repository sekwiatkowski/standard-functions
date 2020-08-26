function pair(a) {
    return b => [a, b]
}

function pairWith(b) {
    return a => [a, b]
}

function pairBy(f) {
    return x => [x, f(x)]
}

function duplicate(a) {
    return [a, a]
}

function second([a, b]) {
    return b
}

function mapFirst(f) {
    return ([a, b]) => [f(a), b]
}

function mapSecond(g) {
    return ([a, b]) => [a, g(b)]
}

function mapPair(g) {
    return ([a, b]) => [a, g(a) (b)]
}

function flipPair([a, b]) {
    return [b, a]
}

function bimap(f, g) {
    return ([a, b]) => [f(a), g(b)]
}

function foldPair(f) {
    return ([a, b]) => f(a) (b)
}

function invertPairs(pairs) {
    const numberOfPairs = pairs.length
    const as = new Array(numberOfPairs)
    const bs = new Array(numberOfPairs)

    for (let i = 0; i < numberOfPairs; i++) {
        const [a, b] = pairs[i]

        as[i] = a
        bs[i] = b
    }

    return [as, bs]
}

module.exports = {
    pair,
    pairWith,
    pairBy,
    duplicate,

    second,

    mapFirst,
    mapSecond,
    mapPair,
    flipPair,
    bimap,
    foldPair,

    invertPairs
}