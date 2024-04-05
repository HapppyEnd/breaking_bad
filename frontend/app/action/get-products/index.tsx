export default async function getAllProducts() {
    const products = await fetch('http://localhost:8000/api/products/', {
        cache: 'no-cache',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const a = products.json()
    console.log(a)
    return a
}