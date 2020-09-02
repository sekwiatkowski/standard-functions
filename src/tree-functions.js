const {concat} = require('./string-or-array-functions')
const {fold} = require('./array-functions')

function foldLeaves(operation) {
    return empty => getChildren => isLeaf => onLeaf => node =>
        fold
            ((acc, child) => operation
                (acc)
                (isLeaf(child) ? onLeaf(child) : foldLeaves(operation) (empty) (isLeaf) (onLeaf) (child)))
            (empty)
            (getChildren(node))
}

const concatLeaves = foldLeaves(concat) ([])

module.exports = {
    foldLeaves,
    concatLeaves
}