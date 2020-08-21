const {fold} = require('./array-functions')
const {appendTo} = require('./string-or-array-functions')
const {constant} = require('./higher-order-functions')

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

/*
    [ some(x), some(y) ] = some([x, y])
    [ None, None ] = None
    [ None, some(x) ] = None
    [ some(x), None ] = None
 */
function invertOptions(arr) {
    return arr.reduce(
        (acc, maybe) => chainOption(inner => mapOption(value => [...inner, value])(maybe))(acc),
        some([])
    )
}

/*
    [ some(x), some(y) ] = [x, y]
    [ None, None ] = []
    [ None, some(x) ] = [x]
    [ some(x), None ] = [x]
 */
function concatOptions(options) {
    return fold
        (acc => secondOpt => foldOption
            (appendTo(acc))
            (constant(acc))
            (secondOpt))
        ([])
        (options)
}

module.exports = {
    some,
    None,

    chainOption,
    mapOption,
    testOption,
    foldOption,
    alternativeOption,

    invertOptions,
    concatOptions
}
