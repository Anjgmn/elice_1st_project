import React from 'react';
import { Cart } from '../components/Cart';

export function CartPage({ cart, setCart, handleDelete, modifyQuantity }) {
  return (
    <div>
      <Cart
        cart={cart}
        setCart={setCart}
        handleDelete={handleDelete}
        modifyQuantity={modifyQuantity}
      />
    </div>
  );
}
