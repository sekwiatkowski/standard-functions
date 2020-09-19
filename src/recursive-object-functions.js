const {hasProperty} = require('./object-functions')
const {omit} = require('./object-functions')
const {values} = require('./object-functions')
const {flatMap} = require('./array-functions')

function mergeRecursiveProperties(operation) {
    return acc => property => {
        const omitRecursiveProperty = omit([property])

        return node => {
            const withoutRecursiveProperty = omitRecursiveProperty(node)

            const ownResult = operation(acc)(withoutRecursiveProperty)

            if (hasProperty(property)(node)) {
                const sub = node[property]

                const childResults = flatMap(value => mergeRecursiveProperties(operation)(ownResult)(property)(value))(values(sub))

                return [ownResult, ...childResults]
            } else {
                return [ownResult]
            }
        }
    }
}

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