export function forEach(f) {
    return arr => {
        arr.forEach(f)
    }
}

export function arrayOf(...values) {
    return values
}

export function fill(value) {
    return n => {
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = value
        }

        return result
    }
}

