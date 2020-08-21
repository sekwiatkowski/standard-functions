const {isString} = require('./string-functions')

function append(item) {
    return arr => isString(item) ? arr + item : [...arr, item]
}

function appendTo(arr) {
    return item => isString(item) ? arr + item : [...arr, item]
}

function prepend(item) {
    return arr => isString(item) ? item + arr : [item, ...arr]
}

function prependTo(arr) {
    return item => isString(item) ? item + arr :  [item, ...arr]
}

module.exports = {
    append,
    appendTo,
    prepend,
    prependTo
}