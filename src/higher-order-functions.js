export function isFunction(input) {
    return typeof input === 'function'
}

export function apply(arg) {
    return f => f(arg)
}

export function applyTo(f) {
    return x => f(x)
}

export function applyPair([a, b]) {
    return f => f(a)(b)
}

export function applyPairTo(f) {
    return ([a, b]) => f(a) (b)
}

export function applyMany(fs) {
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

export function compose() {
    const arr = Array.prototype.slice.call(arguments)

    return x => arr.reduce((acc, f) => f(acc), x)
}

export function perform(f) {
    return x => {
        f(x)
        return x
    }
}

export function identity(x) {
    return x
}

export function constant(x) {
    return () => x
}