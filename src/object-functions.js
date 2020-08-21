const {some, None} = require('./option')

function isObject(candidate) {
    return typeof candidate === 'object'
}

function get(key) {
    return obj => obj[key]
}

function getFrom(obj) {
    return key => obj[key]
}

function maybeGetFrom(obj) {
    return property => obj.hasOwnProperty(property) ? some(obj[property]) : None
}

function keys (obj) {
    return Object.keys(obj)
}

function values (obj) {
    return Object.values(obj)
}

function entries (obj) {
    return keys(obj)
        .map(key => [ key, obj[key] ])
}

function mapValues(f) {
    return obj => {
        const mapped = {}

        const keys = Object.keys(obj)
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            const value = obj[key]
            mapped[key] = f(value)
        }

        return mapped
    }
}

function merge(a) {
    return b => ({...a, ...b})
}

function pick(keys) {
    return obj => {
        const partialObject = {}

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index]
            partialObject[key] = obj[key]
        }

        return partialObject
    }
}

function keyValue(key) {
    return value => ({[key]: value})
}

module.exports = {
    isObject,

    keys,
    values,
    entries,

    mapValues,

    get,

    getFrom,
    maybeGetFrom,

    keyValue,

    merge,

    pick
}