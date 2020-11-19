export function pair(a) {
    return b => [a, b]
}

export function pairWith(b) {
    return a => [a, b]
}

export function pairBy(f) {
    return x => [x, f(x)]
}

export function duplicate(a) {
    return [a, a]
}

export function second([a, b]) {
    return b
}

export function mapFirst(f) {
    return ([a, b]) => [f(a), b]
}

export function mapSecond(g) {
    return ([a, b]) => [a, g(b)]
}

export function mapPair(g) {
    return ([a, b]) => [a, g(a) (b)]
}

export function flipPair([a, b]) {
    return [b, a]
}

export function bimap(f, g) {
    return ([a, b]) => [f(a), g(b)]
}

export function foldPair(f) {
    return ([a, b]) => f(a) (b)
}

export function invertPairs(pairs) {
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