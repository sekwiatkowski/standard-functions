import {map} from './mapping-functions'
import {isSingle, length} from '../collections/length-functions'

export function cartesianProduct(as) {
    return bs => {
        const aLength = as.length
        const bLength = bs.length

        const product = new Array(aLength * bLength)

        for (let i = 0; i < aLength; i++) {
            for (let j = 0; j < bLength; j++) {
                product[i * bLength + j] = [as[i], bs[j]]
            }
        }

        return product
    }
}

export function zip(...input) {
    // zip([ arr_1, ..., arr_n ])
    if (isSingle(input)) {
        const arrayOfArrays = input[0]

        /// zip([ arr_1 ])
        if (!isSingle(arrayOfArrays)) {
            return arrayOfArrays[0]
        } else {
            return zip(...input)
        }
    }

    const numberOArrays = input.length
    const minimumLength = Math.min(...map(length)(input))

    const result = new Array(minimumLength)

    for (let indexItem = 0; indexItem < minimumLength; indexItem++) {
        const zippedItem = new Array(numberOArrays)

        for (let indexInput = 0; indexInput < numberOArrays; indexInput++) {
            zippedItem[indexInput] = input[indexInput][indexItem]
        }

        result[indexItem] = zippedItem
    }

    return result
}

export function unzip(arr) {
    const numberOfItems = arr.length
    const numberOfArrays = Math.min(...map(length)(arr))

    const result = Array(numberOfArrays)
    for (let indexArray = 0; indexArray < numberOfArrays; indexArray++) {
        result[indexArray] = Array(numberOfItems)
    }

    for (let indexArray = 0; indexArray < numberOfArrays; indexArray++) {
        const resultArray = result[indexArray]

        for (let indexItem = 0; indexItem < numberOfItems; indexItem++) {
            resultArray[indexItem] = arr[indexItem][indexArray]
        }
    }

    return result
}