import {isSingle} from '../collections/length-functions'
import {first} from '../collections/single-access-functions'
import {isArray} from '../type-functions'
import {some} from '../booleans/some-functions'
import {none} from '../booleans/none-functions'
import {equals} from '../booleans/equality-functions'

export function contains(item) {
    return arr => some(equals(item))(arr)
}

export function isContainedIn(arr) {
    return item => contains(item)(arr)
}

export function doesNotContain(item) {
    return arr => none(equals(item))(arr)
}

export function isNotContainedIn(arr) {
    return item => doesNotContain(item)(arr)
}

export function containsAll(...candidateItemsOrArray) {
    if (isSingle(candidateItemsOrArray)) {
        const firstCandidateItem = first(candidateItemsOrArray)
        if (isArray(firstCandidateItem)) {
            return containsAll(...firstCandidateItem)
        }
    }

    return (...itemsOrArray) => {
        if (isSingle(itemsOrArray)) {
            const firstItem = first(itemsOrArray)
            if (isArray(firstItem)) {
                return containsAll(candidateItemsOrArray)(...firstItem)
            }
        }

        for (let i = 0; i < candidateItemsOrArray.length; i++) {
            if (!itemsOrArray.includes(candidateItemsOrArray[i])) {
                return false
            }
        }

        return true
    }
}

export function areContainedIn(itemsOrArray) {
    return candidateItemsOrArray => containsAll(candidateItemsOrArray)(itemsOrArray)
}