const {isObject} = require('./object-functions')
const {entries} = require('./object-functions')
const {concat} = require('./string-or-array-functions')
const {fold} = require('./array-functions')

function foldLeaves(operation) {
    return empty => isLeaf => onLeaf => node => {
        return fold
        ((acc, [key, value]) => {
            if (isLeaf(value)) {
                return operation (acc) ([ onLeaf([key, value]) ])
            }
            else if (isObject(value)) {
                return operation (acc) (foldLeaves(operation) (empty) (isLeaf) (onLeaf) (value))
            }
            else {
                return acc
            }
        })
        (empty)
        (entries(node))
    }
}

const concatLeaves = foldLeaves(concat) ([])

module.exports = {
    foldLeaves,
    concatLeaves
}