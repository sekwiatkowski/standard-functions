import {foldResult} from './result'
import {isFunction} from './higher-order-functions'

export function reject(reason) {
    return Promise.reject(reason)
}

export function then(functionOrValue) {
    return promise => promise.then(isFunction(functionOrValue) ? functionOrValue : () => functionOrValue)
}

export function transformResultToPromise(f) {
    return result => foldResult(f) (reject) (result)
}