const {merge} = require('./object-functions')
const {hasProperty} = require('./object-functions')
const {omit} = require('./object-functions')
const {values} = require('./object-functions')
const {flatMap} = require('./array-functions')

function mergeRecursivePropertiesStep(acc) {
    return property => {
        const omitRecursiveProperty = omit([property])

        return node => {
            const withoutRecursiveProperty = omitRecursiveProperty(node)

            const ownResult = merge(acc)(withoutRecursiveProperty)

            if (hasProperty(property)(node)) {
                const sub = node[property]

                const childResults = flatMap(value => mergeRecursivePropertiesStep(ownResult)(property)(value))(values(sub))

                return [ownResult, ...childResults]
            } else {
                return [ownResult]
            }
        }
    }
}

const mergeRecursiveProperties = mergeRecursivePropertiesStep([])

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
    mergeRecursiveProperties
}