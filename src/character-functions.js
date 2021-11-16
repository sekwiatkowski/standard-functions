export const digits = '0123456789'

export function isDigit(c) {
    return digits.includes(c)
}

export const lowercaseEnglishLetters = 'abcdefghijklmnopqrstuvwxyz'

export function isLowercaseEnglishLetter(c) {
    return lowercaseEnglishLetters.includes(c)
}

export const uppercaseEnglishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function isUppercaseEnglishLetter(c) {
    return uppercaseEnglishLetters.includes(c)
}