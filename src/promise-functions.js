import {map} from './array-functions'
import {isArray, isFunction} from './type-functions'
import {first} from './collections/single-access-functions'
import {isSingle} from './collections/length-functions'

export function resolve(value) {
    return Promise.resolve(value)
}

export function reject(reason) {
    return Promise.reject(reason)
}

export function parallel(...promises) {
    if (isSingle(promises)) {
        const firstItem = first(promises)

        if (isArray(firstItem)) {
            return parallel(...firstItem)
        }
    }

    return Promise.all(promises)
}

export function mapFulfilled(functionOrValue) {
    return promise => promise.then(
        isFunction(functionOrValue) ? functionOrValue : () => functionOrValue
    )
}

export function mapPromise(ifFulfilled) {
    return ifRejected => promise => promise.then(
        isFunction(ifFulfilled) ? ifFulfilled : () => ifFulfilled,
        isFunction(ifRejected) ? ifRejected : () => ifRejected
    )
}

export function parallelMap(f) {
    return arr => parallel(map(f) (arr))
}