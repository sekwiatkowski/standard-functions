const arrayFunctions = require('./array-functions')
const objectFunctions = require('./object-functions')
const booleanFunctions = require('./boolean-functions')
const higherOrderFunctions = require('./higher-order-functions')
const stringFunctions = require('./string-functions')

const pair = require('./pair')

const option = require('./option')
const safeArrayFunctions = require('./safe-array-functions')
const safeObjectFunctions = require('./safe-object-functions')

module.exports = {
    ...arrayFunctions,
    ...objectFunctions,
    ...booleanFunctions,
    ...higherOrderFunctions,
    ...stringFunctions,

    ...pair,

    ...option,
    ...safeArrayFunctions,
    ...safeObjectFunctions
}