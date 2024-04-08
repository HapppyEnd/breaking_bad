import { BASE_URL } from "@/lib/settings"

export default async function createOrder(
    name: string, phone_number: string, order : Array<number>) {
    const query = await fetch(`${BASE_URL}/order/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            phone_number: phone_number,
            products: [1]
        })
    })

    return 'aa '
}