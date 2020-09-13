const {some, None} = require('./option')

function safeProperty(key) {
    return obj => obj.hasOwnProperty(key) ? some(obj[key]): None
}

function safePropertyOf(obj) {
    return key => safeProperty(key) (obj)
}

module.exports = {
    safeProperty,
    safePropertyOf
}