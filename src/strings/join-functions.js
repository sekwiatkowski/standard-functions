import {isArray} from '../type-functions'

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
export const joinWithPlus = join('+')

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
export const splitByPlus = split('+')