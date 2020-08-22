const {isString} = require('./string-functions')

function take(n) {
    return arr => arr.slice(0, n)
}

function takeLast(n) {
    return arr => arr.slice(Math.max(arr.length - n, 0))
}

function takeWhile(predicate) {
    return arr => {
        const res = []
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            if (!predicate(item, i)) {
                return res
            }

            res.push(item)
        }

        return res
    }
}

function drop(n) {
    return arr => arr.slice(n)
}

function dropLast(n) {
    return arr => arr.slice(0, -n)
}

function before(n) {
    return arr => arr.slice(0, n)
}

function after(n) {
    return arr => arr.slice(n+1)
}

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
    take,
    takeLast,
    takeWhile,
    drop,
    dropLast,

    before,
    after,

    append,
    appendTo,
    prepend,
    prependTo
}