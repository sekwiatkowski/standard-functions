function isString(input) {
    return typeof input === 'string'
}

function split(separator) {
    return s => s.split(separator)
}

const splitByComma = split(',')
const splitByCommaSpace = split(', ')
const splitBySpace = split(' ')
const splitByNewline = split('\n')
const splitByEqualitySign = split('=')

function join(separator) {
    return arr => arr.join(separator)
}

const joinWithComma = join(',')
const joinWithCommaSpace = join(', ')
const joinWithSpace = join(' ')
const joinWithNewline = join('\n')
const joinWithEqualitySign = join('=')

function surroundWith(beginning) {
    return end => str => beginning + str + end
}

const surroundWithParentheses = surroundWith('(')(')')
const surroundWithSingleQuotes = surroundWith("'")("'")
const surroundWithDoubleQuotes = surroundWith('"')('"')

function lower(input) {
    return input.toLowerCase()
}

module.exports = {
    isString,

    split,
    splitByComma,
    splitBySpace,
    splitByCommaSpace,
    splitByNewline,
    splitByEqualitySign,

    join,
    joinWithComma,
    joinWithCommaSpace,
    joinWithSpace,
    joinWithNewline,
    joinWithEqualitySign,

    surroundWith,
    surroundWithParentheses,
    surroundWithSingleQuotes,
    surroundWithDoubleQuotes,

    lower
}