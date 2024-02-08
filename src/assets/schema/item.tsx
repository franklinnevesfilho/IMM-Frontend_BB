interface Item {
    code: string,
    name: string,
    sellingPrice: number,
    purchasedPrice: number,
    manufacturer: string,
    sizes: {
        size: string,
        color: string,
        quantity: number
    }[]
}

export default Item;