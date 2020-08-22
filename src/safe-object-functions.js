const {some, None} = require('./option')

function safeProperty(key) {
    return obj => obj.hasOwnProperty(key) ? some(obj[key]): None
}

function safePropertyOf(obj) {
    return key => obj.hasOwnProperty(key) ? some(obj[key]) : None
}

module.exports = {
    safeProperty,
    safePropertyOf
}