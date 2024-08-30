import React, { useContext } from 'react';
import CardOrder from '../../components/utils/CardOrder';
import { ShopiCartContext } from '../../components/context';

export default function MyOrders() {
  const { orders } = useContext(ShopiCartContext);

  return (
    <div className="min-h-screen bg-gray-800 text-white py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">My Orders</h1>
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map(order => (
            <CardOrder key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-lg font-bold text-red-500">No orders found.</p>
        </div>
      )}
    </div>
  );
}
