import React from 'react';
import { Side } from '../components/Side';
import { Category } from '../components/Category';

export function CategoryPage({ product, setProduct, category }) {
  return (
    <div>
      <Side data={category} />
      <Category product={product} setProduct={setProduct} />
    </div>
  );
}
