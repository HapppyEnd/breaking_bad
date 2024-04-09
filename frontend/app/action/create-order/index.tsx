import { BASE_URL } from '@/lib/settings'

export default async function createOrder(
    name: string, phone_number: string, order : Array<number>) {
    console.log('order', order)
    const idCount = order.map((row:any) => {
        return {
            id: row.id,
            count: row.count
        }
    })
    const query = await fetch(`${BASE_URL}/order/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            phone_number: phone_number,
            products: idCount
        })
    })

    if (!query.ok) {
        console.log(query.json().then(e => console.log(e)))
    }
}