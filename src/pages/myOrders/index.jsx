import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, ClipboardCheckIcon } from '@heroicons/react/solid';
import CardOrder from '../../components/utils/CardOrder';
import { ShopiCartContext } from '../../components/context';

export default function MyOrders() {
  const { orders } = useContext(ShopiCartContext);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <ClipboardCheckIcon className="w-8 h-8 mr-2 text-green-600" />
          My Orders
        </h1>
      </div>
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map(order => (
            <CardOrder key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-500 py-16">
          <ShoppingBagIcon className="w-16 h-16 mb-4 text-gray-300" />
          <p className="text-lg font-medium text-gray-600">No orders found.</p>
          <p className="text-sm text-gray-400 mt-1">
            Start shopping to create your first order.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors">
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}
