const {some, None} = require('./option')

function safeGet(key) {
    return obj => obj.hasOwnProperty(key) ? some(obj[key]): None
}

function safeGetFrom(obj) {
    return key => obj.hasOwnProperty(key) ? some(obj[key]) : None
}

module.exports = {
    safeGet,
    safeGetFrom
}