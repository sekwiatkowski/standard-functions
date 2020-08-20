function split(separator) {
    return s => s.split(separator)
}

const splitByComma = split(',')
const splitByCommaSpace = split(', ')
const splitBySpace = split(' ')

module.exports = {
    split,
    splitByComma,
    splitBySpace,
    splitByCommaSpace
}