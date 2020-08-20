const {some, None} = require('./option')
const {first, last, find, findIndex, drop, after} = require('./array-functions')

function safeFirst(arr) {
    return arr.length >= 1
        ? some(first(arr))
        : None
}

function safeLast(arr) {
    return arr.length >= 1
        ? some(last(arr))
        : None
}

function safeDrop(n) {
    return arr => arr.length >= n
        ? some(drop(n)(arr))
        : None
}

function safeFind(predicate) {
    return arr => {
        const result = find(predicate)(arr)
        return result !== null
            ? some(result)
            : None
    }
}

function safeFindIndex(predicate) {
    return arr => {
        const result = findIndex(predicate)(arr)
        return result !== null
            ? some(result)
            : None
    }
}

function safeAfter(index) {
    return arr =>
        index < arr.length
            ? some(after(index)(arr))
            : None
}

module.exports = {
    safeFirst,
    safeLast,
    safeDrop,
    safeFind,
    safeFindIndex,
    safeAfter
}