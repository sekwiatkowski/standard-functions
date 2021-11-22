export function repeat(n) {
    return s => {
        let result = ''

        for (let i = 0; i < n; i++) {
            result += s
        }

        return result
    }
}

export function lower(input) {
    return input.toLowerCase()
}

export function upper(input) {
    return input.toUpperCase()
}

export function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
}