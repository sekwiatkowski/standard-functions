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

export function mapFirst(f) {
    return ([a, b]) => [f(a), b]
}

export function mapSecond(g) {
    return ([a, b]) => [a, g(b)]
}

export function mapPair(g) {
    return ([a, b]) => [a, g(a) (b)]
}

export function foldPair(f) {
    return ([a, b]) => f(a) (b)
}