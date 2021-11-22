export function containsSubstring(substring) {
    return candidate => candidate.includes(substring)
}

export function isSubstringOf(text) {
    return candidate => containsSubstring(candidate) (text)
}

export function startsWith(searchString) {
    return input => input.startsWith(searchString)
}

export function endsWith(searchString) {
    return input => input.endsWith(searchString)
}