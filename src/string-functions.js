function split(separator) {
    return s => s.split(separator)
}

const splitByComma = split(',')
const splitByCommaSpace = split(', ')
const splitBySpace = split(' ')
const splitByNewline = split('\n')

function join(separator) {
    return arr => arr.join(separator)
}

const joinWithComma = join(',')
const joinWithCommaSpace = join(', ')
const joinWithSpace = join(' ')
const joinWithNewline = join('\n')

module.exports = {
    split,
    splitByComma,
    splitBySpace,
    splitByCommaSpace,
    splitByNewline,

    join,
    joinWithComma,
    joinWithCommaSpace,
    joinWithSpace,
    joinWithNewline
}