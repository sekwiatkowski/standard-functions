export function unique(arr) {
    return arr.filter((item, index) => index === arr.indexOf(item))
}

export function difference(as) {
    return bs => as.filter(a => !bs.includes(a))
}

export function intersect(A) {
    return B => {
        const uniqueA = unique(A)
        const uniqueB = unique(B)

        const result = []

        for (const a of uniqueA) {
            for (const b of uniqueB) {
                if (a === b) {
                    result.push(a)
                }
            }
        }

        return result
    }
}