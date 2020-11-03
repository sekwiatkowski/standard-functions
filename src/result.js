import {isFunction} from './higher-order-functions'

export function success(value) {
    return {
        value,
        kind: 'Success'
    }
}

export function failure(error) {
    return {
        error,
        kind: 'Failure'
    }
}

export function isSuccess({ kind }) {
    return kind === 'Success'
}

export function isFailure({ kind }) {
    return kind === 'Failure'
}

export function mapResult(f) {
    return result => isSuccess(result)
        ? success(result.value)
        : result
}

export function foldResult(ifSuccess) {
    return ifFailure => res => isSuccess(res)
        ? (isFunction(ifSuccess) ? ifSuccess(res.value) : ifSuccess)
        : (isFunction(ifFailure) ? ifFailure(res.error) : ifFailure)
}