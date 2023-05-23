import React from 'react';
import { Side } from '../components/Side';
import { ProductDetail } from '../components/ProductDetail';

export function ProductDetailPage({ product, cart, setCart, category }) {
  return (
    <div>
      <Side data={category} />
      <ProductDetail cart={cart} setCart={setCart} product={product} />
    </div>
  );
}
