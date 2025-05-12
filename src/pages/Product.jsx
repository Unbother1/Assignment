import React from 'react'
import ProductCard from '../components/ProductCard';

const Product = () => {
  return (
    <section className='flex flex-wrap gap-4 h-fit bg-gradient-to-r from-green-500 via-blue-200 to-red-500 p-[50px]'>
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default Product;