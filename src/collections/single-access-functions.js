import {isFunction} from '../type-functions'

export function single(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            const results = input.filter(predicateOrInput)

            const numberOfResults = results.length

            if (numberOfResults === 0) {
                throw Error(`Expected a single search result. Found no matching items.`)
            } else if (numberOfResults > 1) {
                throw Error(`Expected a single search result. Found ${numberOfResults} matching items.`)
            }

            return results[0]
        }
    } else {
        const numberOfItems = predicateOrInput.length

        if (numberOfItems === 0) {
            throw Error(`Expected a single item. Found no items.`)
        } else if (numberOfItems > 1) {
            throw Error(`Expected a single item. Found ${numberOfItems} items.`)
        }

        return predicateOrInput[0]
    }
}

export function singleOrNull(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            const results = input.filter(predicateOrInput)

            const numberOfResults = results.length

            if (numberOfResults > 1) {
                throw Error(`Expected one or no search results. Found ${numberOfResults} matching items.`)
            }

            return results[0]
        }
    } else {
        const numberOfItems = predicateOrInput.length

        if (numberOfItems > 1) {
            throw Error(`Expected one or no items. Found ${numberOfItems} items.`)
        }

        return predicateOrInput[0]
    }
}

export function getItem(index) {
    return arr => arr[index]
}

export const nth = getItem

export function head(input) {
    return input[0]
}

export function first(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            for (let i = 0; i < input.length; i++) {
                const item = input[i]

                if (predicateOrInput(item)) {
                    return item
                }
            }

            return null
        }
    } else {
        return predicateOrInput[0]
    }
}

export function second(input) {
    return input[1]
}

export function last(predicateOrInput) {
    if (isFunction(predicateOrInput)) {
        return input => {
            for (let i = input.length - 1; i >= 0; i--) {
                const item = input[i]

                if (predicateOrInput(item)) {
                    return item
                }
            }

            return null
        }
    } else {
        return predicateOrInput[predicateOrInput.length - 1]
    }
}