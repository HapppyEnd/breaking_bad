import { BASE_URL } from '@/lib/settings'

export default async function getAllProducts(
        url: string, 
        id: number | string = '' ,
        params: {params: {}, searchParams: {}} | undefined) {
    let searchParams = ''
    if (params) {
        searchParams = '?'
        for (const [key, value] of Object.entries(params.searchParams))
        searchParams += `${key}=${value}&`
    }
    const products = await fetch(`${BASE_URL}/${url}/${id}${searchParams}`, {
        cache: 'no-cache',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return products.json()
}