const {appendTo} = require('./string-or-array-functions')
const {entries} = require('./object-functions')
const {merge} = require('./object-functions')
const {hasProperty} = require('./object-functions')
const {omit} = require('./object-functions')
const {values} = require('./object-functions')
const {flatMap} = require('./array-functions')

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

const mergeRecursively = mergeRecursivelyStep([])

function mergeRecursivelyWithPathStep(acc) {
    return path => property => {
        const omitRecursiveProperty = omit([property])

        return node => {
            const withoutRecursiveProperty = omitRecursiveProperty(node)

            const ownResult = [path, merge(acc)(withoutRecursiveProperty)]

            if (hasProperty(property)(node)) {
                const sub = node[property]

                const childResults = flatMap(([key, value]) => mergeRecursivelyStep(ownResult)(appendTo(path)(key))(property)(value))(entries(sub))

                return [ownResult, ...childResults]
            } else {
                return [ownResult]
            }
        }
    }
}

const mergeRecursivelyWithPath = mergeRecursivelyWithPathStep([])([])

function recursiveProperty(name) {
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

module.exports = {
    recursiveProperty,
    mergeRecursively,
    mergeRecursivelyWithPath
}