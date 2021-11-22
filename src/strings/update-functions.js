import {length} from '../collections/length-functions'
import {repeat} from './mapping-functions'

export function surroundWith(beginning) {
    return end => str => beginning + str + end
}

export const surroundWithParentheses = surroundWith('(')(')')
export const surroundWithSingleQuotes = surroundWith("'")("'")
export const surroundWithDoubleQuotes = surroundWith('"')('"')

export function removeFirst(toBeRemoved) {
    return replaceFirst(toBeRemoved) ('')
}

export function removeLast(toBeRemoved) {
    return replaceLast(toBeRemoved) ('')
}

export function removeAll(toBeRemoved) {
    return replaceAll(toBeRemoved) ('')
}

export function removeDuplicateWhitespaces(input) {
    return input.replace(/\s{2,}/g, ' ')
}

export function replaceFirst(toBeReplaced) {
    return replacement => input => input.replace(toBeReplaced, replacement)
}

export function replaceLast(toBeReplaced) {
    return replacement => input => {
        const lastIndex = input.lastIndexOf(toBeReplaced)

        if (lastIndex === -1) {
            return input
        }

        const before = input.substring(0, lastIndex)
        const after = input.substring(lastIndex + toBeReplaced.length)

        return before + replacement + after
    }
}

export function replaceAll(toBeReplaced) {
    return replacement => input => input.replace(new RegExp(toBeReplaced, 'g'), replacement)
}

export function pad(character) {
    return minimumLength => input => {
        const remaining = minimumLength - length(input)

        if (remaining <= 0) {
            return input
        }

        const start = repeat(remaining) (character)

        return start + input
    }
}

export function trim(input) {
    return input.trim()
}
