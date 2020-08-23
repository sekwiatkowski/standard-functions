const {isString} = require('./type-functions')

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
    return collection => isString(collection) ? collection + item : [...collection, item]
}

function appendTo(collection) {
    return item => isString(collection) ? collection + item : [...collection, item]
}

function prepend(item) {
    return collection => isString(collection) ? item + collection : [item, ...collection]
}

function prependTo(collection) {
    return item => isString(collection) ? item + collection :  [item, ...collection]
}

function isEmpty(arr) {
    return arr.length ===  0
}

function isNotEmpty(arr) {
    return arr.length > 0
}

function isOfLength(length) {
    return arr => arr.length === length
}

function length(arr) {
    return arr.length
}

function concat(as) {
    return bs => as.concat(bs)
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
    prependTo,
    concat,

    length,

    isEmpty,
    isNotEmpty,
    isOfLength
}