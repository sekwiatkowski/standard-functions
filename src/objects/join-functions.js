import {isSingle} from '../collections/length-functions'
import {isArray, isNull, isObject, isUndefined} from '../type-functions'
import {fold} from '../arrays/aggregation-functions'
import {zip} from '../arrays/join-functions'
import {fromEntries} from './creation-functions'
import {single} from '../arrays/search-functions'

export function merge(...firstOrArray) {
    if (isSingle(firstOrArray)) {
        const singleItem = single(firstOrArray)

        if (isNull(singleItem) || isUndefined(singleItem)) {
            return {}
        } else if (isArray(singleItem)) {
            return merge(...singleItem)
        } else if (isObject(singleItem)) {
            return singleItem
        } else {
            throw Error(`Expected either an array, an object, null or undefined. Received: ${singleItem}`)
        }
    } else {
        return fold((acc, obj) =>
            (isNull(obj) || isUndefined(obj))
                ? acc
                : {...acc, ...obj}
        )({})(firstOrArray)
    }
}

export function mergeWith(f) {
    return (...firstOrArray) => {
        if (isSingle(firstOrArray)) {
            const singleItem = single(firstOrArray)

            if (isArray(singleItem)) {
                return mergeWith(f)(...singleItem)
            } else if (isObject(singleItem)) {
                return singleItem
            } else if (isNull(singleItem) || isUndefined(singleItem)) {
                return {}
            } else {
                throw Error(`Expected either an array, an object, null or undefined. Received: ${singleItem}`)
            }
        } else {
            return fold((acc, item) => {
                if (isNull(item) || isUndefined(item)) {
                    return acc
                }

                const merged = {...acc}

                for (const [itemKey, itemValue] of Object.entries(item)) {
                    merged[itemKey] = acc.hasOwnProperty(itemKey)
                        ? f(acc[itemKey])(itemValue)
                        : itemValue
                }

                return merged

            })({})(firstOrArray)
        }
    }
}

export function extend(b) {
    return a => ({
        ...a,
        ...(b ?? {})
    })
}

export function extendWith(f) {
    return b => a => {
        const definiteB = b ?? {}

        const result = {...a}

        for (const [key, value] of Object.entries(definiteB)) {
            result[key] = result.hasOwnProperty(key)
                ? f(result[key])(value)
                : value
        }

        return result
    }
}

export function zipObject(as) {
    return bs => fromEntries(zip(as, bs))
}