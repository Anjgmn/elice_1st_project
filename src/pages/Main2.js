import React from 'react';
import { Side } from '../components/Side';
import { ProductList } from '../components/ProductList';

export function Main2() {
  const categories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Employee' },
    { id: 3, name: 'Student' },
    { id: 4, name: 'Dieter' },
    { id: 5, name: 'Random' },
  ];
  return (
    <div className="main2">
      <Side data={categories} />
      <ProductList />
    </div>
  );
}
