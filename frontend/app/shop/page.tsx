"use server";
import getAllProducts from "../action/get-products";
import MainShop from "../components/shop/main";

export default async function Shop() {
    const products = await getAllProducts('products')
    return (
        <MainShop>{ products }</MainShop>
    );
}
