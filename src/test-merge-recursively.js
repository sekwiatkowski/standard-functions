import {merge} from './object-functions'

console.log(merge(null))
console.log(merge({}))
console.log(merge({a: 1}))
console.log(merge({a: 1}, null))
console.log(merge(null, {a: 1}))
console.log(merge({a: 1}, {b: 2}))
console.log(merge({a: 1}, {b: 2}, {c: 3}))
console.log(merge({a: 1}, {a: 2}))
console.log(merge({a: {b: 1}}, {a: {b: 2}}))
console.log(merge({a: {b: 1}}, {a: {c: 2}}))