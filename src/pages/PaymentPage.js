import React from 'react';
import { Payment } from '../components/Payment';

export function PaymentPage({ cart }) {
  return (
    <div>
      <Payment cart={cart} />
    </div>
  );
}
