function toString(input) {
    return input.toString()
}

function add(x) {
    return y => x + y
}


function multiply(x) {
    return y => x * y
}

module.exports = {
    toString,
    add,
    multiply
}