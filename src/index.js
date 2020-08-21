const arrayFunctions = require('./array-functions')
const booleanFunctions = require('./boolean-functions')
const functions = require('./functions')
const higherOrderFunctions = require('./higher-order-functions')
const objectFunctions = require('./object-functions')
const safeArrayFunctions = require('./safe-array-functions')
const stringFunctions = require('./string-functions')

const option = require('./option')
const pair = require('./pair')

module.exports = {
    ...arrayFunctions,
    ...booleanFunctions,
    ...functions,
    ...higherOrderFunctions,
    ...objectFunctions,
    ...safeArrayFunctions,
    ...stringFunctions,

    ...option,
    ...pair
}