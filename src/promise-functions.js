import {isFunction} from './higher-order-functions'
import {map} from './array-functions'

export function resolve(value) {
    return Promise.resolve(value)
}

export function reject(reason) {
    return Promise.reject(reason)
}

export function mapFulfilled(functionOrValue) {
    return promise => promise.then(isFunction(functionOrValue) ? functionOrValue : () => functionOrValue)
}

export function mapPromise(ifFulfilled) {
    return ifRejected => promise => promise.then(
        isFunction(ifFulfilled) ? ifFulfilled : () => ifFulfilled,
        isFunction(ifRejected) ? ifRejected : () => ifRejected)
}

export function asyncMap(f) {
    return arr => Promise.all(map(f) (arr))
}