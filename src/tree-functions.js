const {append} = require('./string-or-array-functions')
const {isObject} = require('./object-functions')
const {entries} = require('./object-functions')
const {concat} = require('./string-or-array-functions')
const {fold} = require('./array-functions')

function foldLeaves(operation) {
    return empty => path => isLeaf => onLeaf => node =>
        fold
            ((acc, [key, value]) => {
                if (isLeaf(value)) {
                    return operation(acc) ([onLeaf(value, key, path)])
                }
                else if (isObject(value)) {
                    const updatedPath = append(key)(path)
                    return operation(acc) (foldLeaves(operation) (empty) (updatedPath) (isLeaf) (onLeaf) (value))
                }
                else {
                    return acc
                }
            })
            (empty)
            (entries(node))
}

const concatLeaves = foldLeaves(concat) ([]) ([])

module.exports = {
    foldLeaves,
    concatLeaves
}