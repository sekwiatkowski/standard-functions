import {fold} from './arrays/aggregation-functions'
import {appendTo} from './collections/update-functions'
import {isEmpty} from './collections/length-functions'
import {isNull} from './type-functions'

export function succeed(value) {
    return {
        value,
        kind: 'success'
    }
}

export function fail(error) {
    return {
        error,
        kind: 'failure'
    }
}

export function failIf(condition) {
    return error => input => condition(input) ? fail(error) : succeed(input)
}

export const failIfEmpty = failIf(isEmpty)
export const failIfNull = failIf(isNull)

export function isSuccess(result) {
    return result.kind === 'success'
}

export function isFailure(result) {
    return result.kind === 'failure'
}

function throwUnsupportedKind(kind) {
    throw Error(`Unsupported kind: ${kind}`)
}

export function mapResult(f) {
    return result => {
        switch (result.kind) {
            case 'success':
                return {...result, value: f(result.value)}
            case 'failure':
                return result
            default:
                throwUnsupportedKind(result.kind)
        }
    }
}

export function mapFailure(f) {
    return result => {
        switch (result.kind) {
            case 'success':
                return result
            case 'failure':
                return {...result, error: f(result.error)}
            default:
                throwUnsupportedKind(result.kind)
        }
    }
}

export function chainResult(f) {
    return result => {
        switch (result.kind) {
            case 'success':
                return f(result.value)
            case 'failure':
                return result
            default:
                throwUnsupportedKind(result.kind)
        }
    }
}

export function catchResult(f) {
    return result => {
        switch (result.kind) {
            case 'success':
                return result
            case 'failure':
                return f(result.error)
            default:
                throwUnsupportedKind(result.kind)
        }
    }
}

export function foldResult(onSuccess) {
    return onFailure => result => {
        switch (result.kind) {
            case 'success':
                return onSuccess(result.value)
            case 'failure':
                return onFailure(result.error)
            default:
                throwUnsupportedKind(result.kind)
        }
    }
}

export function invertResults(...results) {
    return fold((acc, result) =>
        chainResult(arr => mapResult(appendTo(arr)) (result)) (acc)
    ) (succeed([])) (results)
}