'use server';
import getAllProducts from "@/app/action/get-products";
import MainShop from "../components/shop/main";
import Paginations from "../components/pagination";

export default async function Shop(params: any) {
    const products = await getAllProducts('products', '', params)
    return (
        <>
            <MainShop>{products}</MainShop>
            <Paginations 
                limit={9}
                count={products.count}
                page={params.searchParams.page}/>
        </>
    )
}