const {isString} = require('./string-functions')

function take(n) {
    return arr => arr.slice(0, n)
}

function takeFrom(arr) {
    return n => take(n) (arr)
}

function takeLast(n) {
    return arr => arr.slice(Math.max(arr.length - n, 0))
}


function takeLastFrom(arr) {
    return n => takeLast(n) (arr)
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

function dropFrom(arr) {
    return n => drop(n) (arr)
}

function dropLast(n) {
    return arr => arr.slice(0, -n)
}

function dropLastFrom(arr) {
    return n => dropLast(n) (arr)
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
    takeFrom,
    takeLast,
    takeLastFrom,
    takeWhile,

    drop,
    dropFrom,
    dropLast,
    dropLastFrom,

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