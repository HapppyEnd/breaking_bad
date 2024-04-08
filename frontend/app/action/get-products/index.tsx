import { BASE_URL } from '@/lib/settings'

export default async function getAllProducts(
        url: string, id: number | string = '' ) {
    console.log(url)
    console.log(id)
    const products = await fetch(`${BASE_URL}/${url}/${id}`, {
        cache: 'no-cache',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return products.json()
}