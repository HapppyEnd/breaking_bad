'use client';
import { useState, useEffect } from 'react';
import getAllProducts from "@/app/action/get-products";
import MainShop from "../components/shop/main";
import Paginations from "../components/pagination";
import ErrorOrLoading from '../components/error-or-loading';

interface ProductsResponse {
  products: any[];
  count: number;
}


export default function Shop(params: any) {
  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getAllProducts('products', '', params);
      setProducts(response);
      setLoading(false);
    };
    fetchProducts();
  }, [params]);

  if (loading) {
    return <ErrorOrLoading message={'Loading...'} />;
  }

  if (products) {
    return (
      <>
        <MainShop products={products} />
        <Paginations
          limit={9}
          count={products.count}
          page={params.searchParams.page}
        />
      </>
    );
  }
  return <ErrorOrLoading message={'No products found'} showLink={true}/>;
}