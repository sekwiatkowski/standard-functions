import {isEmpty, isSingle} from './length-functions'

export function getItem(index) {
    return arr => arr[index]
}

export const nth = getItem

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

export function single(arr) {
    if (isSingle(arr)) {
        return arr[0]
    }
    else if (isEmpty(arr)) {
        throw Error(`Expected a single item. Found no items.`)
    }
    else {
        throw Error(`Expected a single search result. Found no items.`)
    }
}