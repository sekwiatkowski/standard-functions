function isFunction(input) {
    return typeof input === 'function'
}

function apply(arg) {
    return f => f(arg)
}

function applyTo(f) {
    return x => f(x)
}

function applyPair([a, b]) {
    return f => f(a)(b)
}

function applyPairTo(f) {
    return ([a, b]) => f(a) (b)
}

function applyMany(fs) {
    return arr => {
        const numberOfFunctions = fs.length
        const numberOfValues = arr.length

        const res = Array(numberOfFunctions * numberOfValues)

        for (let i_f = 0; i_f < numberOfFunctions; i_f++) {
            const f = fs[i_f]

            for (let i_x = 0; i_x < numberOfValues; i_x++) {
                const x = arr[i_x]

                res[i_f * numberOfValues + i_x] = f(x)
            }
        }

        return res
    }
}

function compose() {
    const arr = Array.prototype.slice.call(arguments)

    return x => arr.reduce((acc, f) => f(acc), x)
}

function perform(f) {
    return x => {
        f(x)
        return x
    }
}

function identity(x) {
    return x
}

function constant(x) {
    return () => x
}

module.exports = {
    isFunction,

    applyPair,
    applyPairTo,

    apply,
    applyTo,

    applyMany,

    compose,
    perform,

    identity,
    constant
}