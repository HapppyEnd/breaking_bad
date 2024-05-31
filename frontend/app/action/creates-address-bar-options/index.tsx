export default function createAddressBarOptions(param: string) {
    let searchParams = ''

    for (const [key, value] of Array.from(new URLSearchParams(window.location.search))) {
        if (key !== 'category') {
            searchParams += `${key}=${value}&`
        }
    }
    return searchParams
}