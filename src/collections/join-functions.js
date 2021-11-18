import {isArray, isString} from '../type-functions'

export function concat(...items) {
    if (items.length === 1) {
        const firstItem = items[0]

        if (isArray(firstItem)) {
            // 2D array with a single item
            if (firstItem.length === 1) {
                return firstItem[0]
            } else {
                return concat(...firstItem)
            }
        }
    }

    const initial = isString(items[0]) ? '' : []

    return items.reduce(
        (acc, s) => acc.concat(s),
        initial
    )
}