'use client';
import React, { useState, useEffect } from 'react';
import getAllProducts from "@/app/action/get-products";
import MainShop from "../../components/shop/main";
import Paginations from "../../components/pagination";
import ErrorOrLoading from '../../components/error-or-loading';

interface ProductsResponse {
  products: any[];
  count: number;
}

export default function Shop(
    params: { params: {}, searchParams: {page?: number}} ) {

  const [products, setProducts] = useState<ProductsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts('products', '', params);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('No products found');
      }
    };

    fetchProducts();
  }, [params]);

  // If an error occurred, show the error or loading component.
  if (error) {
    return <ErrorOrLoading message={error} showLink={true} />;
  }

  // If products are not found, show the error or loading component.
  if (!products) {
    return <ErrorOrLoading message={'Loading products...'} showLink={false} />;
  }


  // If products are found, render the MainShop and Paginations components.
  return (
    <>
      <MainShop products={products} />
      <Paginations
        limit={9}
        count={products.count}
        page={params.searchParams.page || 1}
      />
    </>
  );
}