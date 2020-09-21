import {entries, hasProperty, merge, omit, values} from './object-functions'
import {appendTo} from './string-or-array-functions'
import {flatMap} from './array-functions'

function mergeRecursivelyStep(acc) {
    return property => {
        const omitRecursiveProperty = omit([property])

        return node => {
            const withoutRecursiveProperty = omitRecursiveProperty(node)

            const ownResult = merge(acc)(withoutRecursiveProperty)

            if (hasProperty(property)(node)) {
                const sub = node[property]

                const childResults = flatMap(value => mergeRecursivelyStep(ownResult)(property)(value))(values(sub))

                return [ownResult, ...childResults]
            } else {
                return [ownResult]
            }
        }
    }
}

export const mergeRecursively = mergeRecursivelyStep([])

function mergeRecursivelyWithPathStep([ path, previousMerge ]) {
    return property => {
        const omitRecursiveProperty = omit([property])

        return node => {
            const withoutRecursiveProperty = omitRecursiveProperty(node)

            const updatedMerge = merge(previousMerge)(withoutRecursiveProperty)

            const ownResult = [path, updatedMerge]

            if (hasProperty(property)(node)) {
                const sub = node[property]

                const childResults = flatMap
                    (([key, value]) => mergeRecursivelyWithPathStep([appendTo(path)(key), updatedMerge])(property)(value))
                    (entries(sub))

                return [ownResult, ...childResults]
            } else {
                return [ownResult]
            }
        }
    }
}

export const mergeRecursivelyWithPath = mergeRecursivelyWithPathStep([ [], [] ])

export function recursiveProperty(name) {
    const omitRecursiveProperty = omit([name])

    return node => {
        const withoutRecursiveProperty = omitRecursiveProperty(node)

        if (hasProperty(name)(node)) {
            const sub = node[name]

            const childResults = flatMap(value => recursiveProperty(name)(value)) (values(sub))

            return [withoutRecursiveProperty, ...childResults]
        }
        else {
            return [withoutRecursiveProperty]
        }
    }
}