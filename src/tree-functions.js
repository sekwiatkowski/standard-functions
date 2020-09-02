const {concat} = require('./string-or-array-functions')
const {fold} = require('./array-functions')

function foldTree(operation) {
    return empty => getChildren => isLeaf => onLeaf => node =>
        fold
            ((acc, child) => operation(acc) (isLeaf(child) ? onLeaf(child) : concatTree(isLeaf)(onLeaf)(child)))
            (empty)
            (getChildren(node))
}

const concatTree = foldTree(concat) ([])

module.exports = {
    foldTree,
    concatTree
}