export function hasProperty(key) {
    return obj => obj.hasOwnProperty(key)
}

export function isPropertyOf(obj) {
    return key => obj.hasOwnProperty(key)
}

export function propertyEquals(property) {
    return value => obj => obj[property] === value
}
