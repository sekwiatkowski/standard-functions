export function mapKeys(f) {
    return obj => {
        const result = {}

        const keys = Object.keys(obj)

        for (const key of keys) {
            result[f(key)] = obj[key]
        }

        return result
    }
}

export function mapValues(f) {
    return obj => {
        const result = {}

        const keys = Object.keys(obj)

        for (const key of keys) {
            const value = obj[key]
            result[key] = f(value)
        }

        return result
    }
}

export function mapEntries(f) {
    return obj => {
        const entries = Object.entries(obj)
        const numberOfEntries = entries.length

        const result = Array(numberOfEntries)

        for (let index = 0; index < numberOfEntries; index++) {
            const [key, value] = entries[index]
            result[index] = f([key, value])
        }

        return result
    }
}

export function mapObject(f) {
    return obj => {
        const result = {}

        const entries = Object.entries(obj)
        for (const entry of entries) {
            const [key, value] = entry
            result[key] = f([key, value])
        }

        return result
    }
}

