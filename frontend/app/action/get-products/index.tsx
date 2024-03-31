export default async function getAllProducts() {
    const products = await fetch('http://localhost:8000/api/products/', {
        cache: 'force-cache',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return products.json()
}