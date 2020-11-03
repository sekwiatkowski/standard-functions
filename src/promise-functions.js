import {foldResult} from './result'

export function reject(reason) {
    return Promise.reject(reason)
}

function transformResultToPromise(f) {
    return result => foldResult(f) (reject) (result)
}