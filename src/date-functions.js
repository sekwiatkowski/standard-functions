export function millisecondsToSecond(ms) {
    return ms / 1_000
}

export function secondsToMilliseconds(seconds) {
    return seconds * 1_000
}

export function secondsToMinutes(seconds) {
    return seconds / 60
}

export function minutesToSeconds(minutes) {
    return minutes * 60
}

export function minutesToHours(minutes) {
    return minutes / 60
}

export function hoursToDays(hours) {
    return hours / 24
}

export function hoursToMinutes(hours) {
    return hours * 60
}

export function daysToHours(days) {
    return days / 24
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

export function addMilliseconds(milliseconds) {
    return date => new Date(date.getTime() + milliseconds)
}

export function addSeconds(seconds) {
    return addMilliseconds(secondsToMilliseconds(seconds))
}

export function addMinutes(minutes) {
    return addSeconds(minutesToSeconds(minutes))
}

export function addHours(hours) {
    return addMinutes(hoursToMinutes(hours))
}

export function addDays(days) {
    return addHours(daysToHours(days))
}