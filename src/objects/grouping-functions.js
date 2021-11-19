import {not} from '../booleans/negation-functions'
import {isObject} from '../type-functions'

/*
    {
        a: 1,
        b: {
            c: 2
            d: 3
        },
        e: {
            f: {
                g: 4
            }
        }
    }
 */
export function flattenObject(unflattened, stopCondition = not(isObject), parent = '', flattened = {}) {
    const unflattenedKeys = Object.keys(unflattened)

    for (const key of unflattenedKeys) {
        const value = unflattened[key]

        if (stopCondition(value)) {
            const path = parent + key
            flattened[path] = value
        }
        else {
            flattenObject(value, stopCondition, parent + key + '.', flattened)
        }
    }

    return flattened
}

/*
    {
        'a': 1,
        'b.c': 2,
        'b.d': 3,
        'e.f.g': 4
    }

    {
        a: 1,
        b: {
            c: 2
            d: 3
        },
        e: {
            f: {
                g: 4
            }
        }
    }
 */
export function unflattenObject(flattened) {
    const unflattened = {}

    const flattenedKeys = Object.keys(flattened)

    for (const key of flattenedKeys) {
        const value = flattened[key]
        const fragments = key.split('.')
        const numberOfFragments = fragments.length

        let current = unflattened

        for (let indexFragment = 0; indexFragment < numberOfFragments - 1; indexFragment++) {
            const fragment = fragments[indexFragment]

            if (!current.hasOwnProperty(fragment)) {
                current[fragment] = {}
            }

            current = current[fragment]
        }

        current[fragments[numberOfFragments - 1]] = value
    }

    return unflattened
}

