const {identity} = require('./higher-order-functions')
const {isFunction} = require('./higher-order-functions')
const {fold} = require('./array-functions')
const {appendTo} = require('./string-or-array-functions')

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
    return opt => isSome(opt)
        ? f(opt.value)
        : None
}

function mapOption(f) {
    return opt => isSome(opt)
        ? some(f(opt.value))
        : None
}

function testOption(p) {
    return opt => isSome(opt) && p(opt.value)
        ? opt
        : None
}

function foldOption(ifSome) {
    return ifNone => opt => isSome(opt)
        ? (isFunction(ifSome) ? ifSome(opt.value) : ifSome)
        : (isFunction(ifNone) ? ifNone() : ifNone)
}

function alternativeOption(functionOrOption) {
    return opt => isSome(opt)
        ? opt
        : (isFunction(functionOrOption) ? functionOrOption() : functionOrOption)
}

function alternativeValue(functionOrValue) {
    return opt => foldOption(identity) (functionOrValue) (opt)
}

function isSome(opt) {
    return opt.kind === 'Some'
}

function isNone(opt) {
    return opt.kind === 'None'
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
        ((acc, opt) => foldOption
            (appendTo(acc))
            (acc)
            (opt))
        ([])
        (options)
}

function maybeNull(nullable) {
    return nullable === null ? None : some(nullable)
}

function maybeUndefined(undefinable) {
    return undefinable === undefined ? None : some(undefinable)
}

module.exports = {
    some,
    None,

    chainOption,

    mapOption,

    testOption,

    alternativeOption,

    foldOption,
    alternativeValue,

    isSome,
    isNone,

    invertOptions,
    concatOptions,

    maybeNull,
    maybeUndefined
}
