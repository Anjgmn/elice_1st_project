import React, { useEffect, useState } from 'react';
import { PersonalOrder } from '../components/PersonalOrder';
import { Repositories, RepositoryNames } from '../repository';

export function PersonalOrderPage() {
  const [orders, setOrders] = useState([]);
  const orderRepository = Repositories[RepositoryNames.ORDER];

  const token = localStorage.userToken;

  useEffect(() => {
    orderRepository.getUserOrders(token)
      .then((foundOrders) => setOrders(() => foundOrders));
  }, []);

  return (
    <div>
      <PersonalOrder orders={orders} />
    </div>
  );
}
