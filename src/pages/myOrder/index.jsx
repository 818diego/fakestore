import React, { useContext } from 'react';
import { ShopiCartContext } from '../../components/context';
import { useNavigate } from 'react-router-dom';

export default function MyOrder() {
  const { orders, saveOrder } = useContext(ShopiCartContext);
  const navigate = useNavigate();

  const lastOrder = orders[orders.length - 1];

  if (!lastOrder) {
    return <div className="text-center text-gray-500">No orders found.</div>;
  }

  const handleSaveOrder = () => {
    saveOrder(lastOrder);
    navigate('/myorders');
  };

  const handleDiscardOrder = () => {
    navigate('/'); 
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Summary</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Details</h2>
        <p className="text-sm text-gray-500 mb-6">Date: {lastOrder.date}</p>
        <ul className="space-y-6">
          {lastOrder.items.map((item) => (
            <li key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md shadow-sm"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">{item.quantity} x ${item.price.toFixed(2)}</p>
                <p className="text-md font-medium text-gray-600 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
          <span className="text-xl font-bold text-gray-800">Total:</span>
          <span className="text-xl font-bold text-gray-800">${lastOrder.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={handleDiscardOrder}
            className="py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-400 transition"
          >
            Discard
          </button>
          <button
            onClick={handleSaveOrder}
            className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400 transition"
          >
            Save Order
          </button>
        </div>
      </div>
    </div>
  );
}
