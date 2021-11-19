export function associate(f) {
    return items => {
        const obj = {}

        for (const item of items) {
            const [key, value] = f(item)
            obj[key] = value
        }

        return obj
    }
}

export function associateBy(f) {
    return values => {
        const obj = {}

        for (const value of values) {
            obj[f(value)] = value
        }

        return obj
    }
}

export function associateWith(f) {
    return keys => {
        const obj = {}

        for (const key of keys) {
            obj[key] = f(key)
        }

        return obj
    }
}

export function fromProperty(key) {
    return value => ({[key]: value})
}

export function fromEntry([key, value]) {
    return {[key]: value}
}

export function fromEntries(entries) {
    return Object.fromEntries(entries)
}