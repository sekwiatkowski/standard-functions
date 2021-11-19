import {isArray} from '../type-functions'
import {isTrue} from './equality-functions'

export function some(predicate) {
    return (...itemsOrArray) => {
        const items = itemsOrArray.length === 1 && isArray(itemsOrArray[0])
            ? itemsOrArray[0]
            : itemsOrArray

        for (const item of items) {
            if (predicate(item)) {
                return true
            }
        }
        return false
    }
}

export const someTrue = some(isTrue)

export function somePass(...predicates) {
    const firstItem = predicates[0]
    if (isArray(firstItem)) {
        return somePass(...firstItem)
    }

    return items => {
        for (let i = 0; i < predicates.length; i++) {
            if (predicates[i](items)) {
                return true
            }
        }

        return false
    }
}