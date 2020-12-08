import {unzip, zip} from './array-functions'

console.log(zip(
     ['A', 'B', 'C', 'd'],
     ['a', 'b', 'c', 'd'],
     [1, 2, 3, 4]
))

console.log(unzip(
    [
        ['A', 'a', 1], ['B', 'b', 2], ['C', 'c', 3], ['D', 'd', 4]
    ]
))