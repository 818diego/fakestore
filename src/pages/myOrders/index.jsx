import React, { useContext } from 'react';
import CardOrder from '../../components/utils/CardOrder';
import { ShopiCartContext } from '../../components/context';

export default function MyOrders() {
  const { orders } = useContext(ShopiCartContext);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
      {orders.length > 0 ? (
        orders.map(order => <CardOrder key={order.id} order={order} />)
      ) : (
        <div className="text-center text-gray-500">No orders found.</div>
      )}
    </div>
  );
}
