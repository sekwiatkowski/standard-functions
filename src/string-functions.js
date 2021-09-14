import {isArray} from './array-functions'

export function isString(input) {
    return typeof input === 'string'
}

export function toString(input) {
    return input.toString()
}

export function split(separator) {
    return s => s.split(separator)
}

export const splitByAmpersand = split('&')
export const splitByComma = split(',')
export const splitByCommaSpace = split(', ')
export const splitByDash = split('-')
export const splitByDot = split('.')
export const splitBySemicolon = split('; ')
export const splitBySemicolonSpace = split('; ')
export const splitBySlash = split('/')
export const splitBySpace = split(' ')
export const splitByNewline = split('\n')
export const splitByEqualitySign = split('=')

export function join(separator) {
    return (...items) => {

        if (items.length === 1) {
            const firstItem = items[0]

            if (isArray(firstItem)) {
                return join(separator) (...firstItem)
            }
        }

        return items.join(separator)
    }
}

export const joinWithAmpersand = join('&')
export const joinWithComma = join(',')
export const joinWithCommaSpace = join(', ')
export const joinWithDash = join('-')
export const joinWithDot = join('.')
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

export function trim(input) {
    return input.trim()
}

export function containsSubstring(substring) {
    return candidate => candidate.includes(substring)
}

export function isSubstringOf(text) {
    return candidate => containsSubstring(candidate) (text)
}

export function removeDuplicateWhitespaces(input) {
    return input.replace(/\s{2,}/g, ' ')
}

export function startsWith(searchString) {
    return input => input.startsWith(searchString)
}

export function endsWith(searchString) {
    return input => input.endsWith(searchString)
}