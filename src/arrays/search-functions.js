import {filterIndices} from './filtering-functions'
import {equals} from '../booleans/equality-functions'
import {isNull} from '../type-functions'

export function singleOrNull(predicateOrInput) {
    return input => {
        const matches = input.filter(predicateOrInput)

        const numberOfResults = matches.length

        if (numberOfResults === 0) {
            return null
        }
        else if (numberOfResults === 1) {
            return matches[0]
        }
        else {
            throw Error(`Expected one or no search results. Found ${numberOfResults} matching items.`)
        }
    }
}

export function single(predicateOrInput) {
    return input => {
        const indexOrNull = singleOrNull(predicateOrInput) (input)

        if (isNull(indexOrNull)) {
            throw Error(`Expected a single search result. Found no matching items.`)
        }

        return indexOrNull[0]
    }
}

export function singleIndexOrNull(predicate) {
    return arr => {
        const matches = []
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                matches.push(i)
            }
        }

        const numberOfResults = matches.length

        if (numberOfResults === 0) {
            return null
        }
        else if (numberOfResults === 1) {
            return matches[0]
        }
        else if (numberOfResults > 1) {
            throw Error(`Expected a single search result. Found ${numberOfResults} matching items.`)
        }
    }
}

export function singleIndex(predicate) {
    return arr => {
        const indexOrNull = singleIndexOrNull(predicate) (arr)

        if (isNull(indexOrNull)) {
            throw Error(`Expected a single search result. Found no matching items.`)
        }

        return indexOrNull
    }
}

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


export function findLastIndex(predicate) {
    return arr => {
        for (let i = arr.length - 1; i >= 0; i--) {
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

export function lastIndexOf(item) {
    return arr => {
        for (let i = arr.length-1; i < arr.length; i--) {
            if (item === arr[i]) {
                return i
            }
        }
        return null
    }
}

export function indicesOf(item) {
    return arr => filterIndices(equals(item))(arr)
}

