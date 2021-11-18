export function find(predicate) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i]
            if (predicate(item)) {
                return item
            }
        }
        return null
    }
}

export function findLast(predicate) {
    return input => {
        for (let i = input.length - 1; i >= 0; i--) {
            const item = input[i]

            if (predicate(item)) {
                return item
            }
        }

        return null
    }
}

export function findIndex(predicate) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                return i
            }
        }
        return null
    }
}

export function indexOf(item) {
    return arr => {
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return i
            }
        }
        return null
    }
}

export function singleIndex(predicate) {
    return arr => {
        const matches = []
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                matches.push(i)
            }
        }

        const numberOfResults = matches.length

        if (numberOfResults === 0) {
            throw Error(`Expected a single search result. Found no ${numberOfResults} matching items.`)
        } else if (numberOfResults > 1) {
            throw Error(`Expected a single search result. Found ${numberOfResults} matching items.`)
        }

        return matches[0]
    }
}

