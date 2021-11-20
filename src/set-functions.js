import {isSingle} from './collections/length-functions'
import {is2DArray} from './type-functions'
import {reduce} from './arrays/aggregation-functions'
import {single} from './collections/single-access-functions'

export function unique(arr) {
    return arr.filter((item, index) => index === arr.indexOf(item))
}

export function difference(A) {
    return B => A.filter(a => !B.includes(a))
}

export function intersect(A) {
    return B => {
        const uniqueA = unique(A)
        const uniqueB = unique(B)

        const result = []

        for (const a of uniqueA) {
            for (const b of uniqueB) {
                if (a === b) {
                    result.push(a)
                }
            }
        }

        return result
    }
}

export function intersection(...sets) {
    if (isSingle(sets)) {
        const singleItem = single(sets)

        if (is2DArray(singleItem)) {
            return intersection(...singleItem)
        }
    }

    return reduce((acc, set) => intersect(acc) (set)) (sets)
}