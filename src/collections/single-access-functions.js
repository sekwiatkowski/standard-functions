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