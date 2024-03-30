export default function totalPrice(orders: Array<Order>): String {
    let total = 0
        orders?.map((order) => {
            total += order.obj.price * order.count
        })
    return `${total} руб.`
}

export function deleteProduct(id: number): [Order] {
    const storage = JSON.parse(localStorage.getItem("products")!)
    storage.splice(
        storage.indexOf(
            storage.find((e: Order) => e.id == id)), 1)
    localStorage.setItem("products", JSON.stringify(storage))
    return storage
}