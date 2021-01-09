export function millisecondsToSecond(ms) {
    return ms / 1_000
}

export function secondsToMinutes(ms) {
    return ms / 60
}

export function minutesToHours(ms) {
    return ms / 60
}

export function hoursToDays(ms) {
    return ms / 24
}

export function differenceInMilliseconds(first) {
    return second => first - second
}

export function differenceInSeconds(first) {
    return second => millisecondsToSecond(differenceInMilliseconds(first) (second))
}

export function differenceInMinutes(first) {
    return second => secondsToMinutes(differenceInSeconds(first) (second))
}

export function differenceInHours(first) {
    return second => minutesToHours(differenceInMinutes(first) (second))
}

export function differenceInDays(first) {
    return second => hoursToDays(differenceInHours(first) (second))
}

export function elapsedMilliseconds(d) {
    return differenceInMinutes(new Date(), d)
}

export function elapsedSeconds(d) {
    return differenceInMilliseconds(new Date(), d)
}

export function elapsedMinutes(d) {
    return differenceInSeconds(new Date(), d)
}

export function elapsedHours(d) {
    return differenceInHours(new Date(), d)
}

export function elapsedDays(d) {
    return differenceInDays(new Date(), d)
}