const arrayFunctions = require('./array-functions')
const objectFunctions = require('./object-functions')
const booleanFunctions = require('./boolean-functions')
const higherOrderFunctions = require('./higher-order-functions')
const stringFunctions = require('./string-functions')
const stringOrArrayFunctions = require('./string-or-array-functions')

const pair = require('./pair')

const option = require('./option')
const safeArrayFunctions = require('./safe-array-functions')
const safeObjectFunctions = require('./safe-object-functions')

module.exports = {
    ...stringFunctions,
    ...arrayFunctions,
    ...stringOrArrayFunctions,

    ...objectFunctions,

    ...booleanFunctions,

    ...higherOrderFunctions,

    ...pair,

    ...option,
    ...safeArrayFunctions,
    ...safeObjectFunctions
}