import Banner from '@/components/Banner';
import Gift from '@/components/Gift';
import Product from '@/components/ProductCard/Product';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <Product />
      <Gift />
    </div>
  );
};

export default page;