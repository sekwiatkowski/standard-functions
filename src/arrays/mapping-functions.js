import {isSingleOrEmpty} from '../collections/length-functions'

export function map(f) {
    return arr => arr.map(f)
}

export function mapNotNull(f) {
    return arr => {
        const result = []

        for (let i = 0; i < arr.length; i++) {
            const y = f(arr[i])

            if (y) {
                result.push(y)
            }
        }

        return result
    }
}

export function flatMap(f) {
    return arr => arr.flatMap(f)
}

export function intersperse(interspersion) {
    return arr => {
        if (isSingleOrEmpty(arr)) {
            return [...arr]
        }

        const arrLength = arr.length

        const newSize = 2 * arrLength - 1

        const result = new Array(newSize)

        let indexArray = 0
        while (indexArray < arrLength) {
            result[2 * indexArray] = arr[indexArray]

            indexArray++
        }

        let indexInterspersion = 1
        while (indexInterspersion < newSize - 1) {
            result[indexInterspersion] = interspersion

            indexInterspersion += 2
        }

        return result
    }
}

export function fill(value) {
    return n => {
        const result = Array(n)

        for (let i = 0; i < n; i++) {
            result[i] = value
        }

        return result
    }
}