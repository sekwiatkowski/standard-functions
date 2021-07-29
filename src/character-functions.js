const digits = '0123456789'

export function isDigit(c) {
    return digits.includes(c)
}

const lowercaseEnglishLetters = 'abcdefghijklmnopqrstuvwxyz'

export function isLowercaseEnglishLetter(c) {
    return lowercaseEnglishLetters.includes(c)
}

const uppercaseEnglishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function isUppercaseEnglishLetter(c) {
    return uppercaseEnglishLetters.includes(c)
}