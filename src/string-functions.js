export function isString(input) {
    return typeof input === 'string'
}

export function toString(input) {
    return input.toString()
}

export function split(separator) {
    return s => s.split(separator)
}

export const splitByComma = split(',')
export const splitByCommaSpace = split(', ')
export const splitBySemicolon = split('; ')
export const splitBySemicolonSpace = split('; ')
export const splitBySlash = split('/')
export const splitBySpace = split(' ')
export const splitByNewline = split('\n')
export const splitByEqualitySign = split('=')

export function join(separator) {
    return arr => arr.join(separator)
}

export const joinWithComma = join(',')
export const joinWithCommaSpace = join(', ')
export const joinWithSemicolon = join(';')
export const joinWithSemicolonSpace = join('; ')
export const joinWithSlash = join('/')
export const joinWithSpace = join(' ')
export const joinWithNewline = join('\n')
export const joinWithEqualitySign = join('=')

export function surroundWith(beginning) {
    return end => str => beginning + str + end
}

export const surroundWithParentheses = surroundWith('(')(')')
export const surroundWithSingleQuotes = surroundWith("'")("'")
export const surroundWithDoubleQuotes = surroundWith('"')('"')

export function lower(input) {
    return input.toLowerCase()
}

export function upper(input) {
    return input.toUpperCase()
}

export function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
}