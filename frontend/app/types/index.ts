type Order = {
    count: number
    id: number
    obj: {
        image: string,
        title: string,
        price: number,
    }
}

type Card = {
    id: number
    advantages: Array<string>
    description: string
    imageUrl: string
    price: number
    title: string
}
