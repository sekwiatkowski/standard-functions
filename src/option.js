function some(value) {
    return {
        value,
        kind: 'Some'
    }
}

const None = {
    kind: 'None'
}

function chainOption(f) {
    return opt => opt.kind === 'Some'
        ? f(opt.value)
        : None
}

function mapOption(f) {
    return opt => opt.kind === 'Some'
        ? some(f(opt.value))
        : None
}

function testOption(p) {
    return opt => opt.kind === 'Some' && p(opt.value)
        ? opt
        : None
}

function foldOption(ifSome) {
    return ifNone => opt => opt.kind === 'Some'
        ? ifSome(opt.value)
        : ifNone()
}

function alternativeOption(f) {
    return opt => opt.kind === 'Some' ? opt : f()
}

function invertOptions(arr) {
    return arr.reduce(
        (acc, maybe) => chainOption(inner => mapOption(value => [...inner, value])(maybe))(acc),
        some([])
    )
}

module.exports = {
    some,
    None,
    chainOption,
    mapOption,
    testOption,
    foldOption,
    alternativeOption,
    invertOptions
}
