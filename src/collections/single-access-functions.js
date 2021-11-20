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

export function getItemFrom(array) {
    return index => getItem(index) (array)
}

export const nthOf = getItemFrom

export function first(collection) {
    return collection[0]
}

export const head = first

export function second(collection) {
    return collection[1]
}

export function last(collection) {
    return collection[collection.length - 1]
}