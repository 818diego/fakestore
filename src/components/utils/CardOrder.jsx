import React from 'react';

export default function CardOrder({ order }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Order Date: {order.date}</h3>
            <ul className="mt-4 space-y-2">
                {order.items.map((item) => (
                    <li key={item.id} className="flex justify-between">
                        <span>{item.title} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="font-bold text-gray-700">Total:</span>
                <span className="font-bold text-gray-700">${order.total.toFixed(2)}</span>
            </div>
        </div>
    );
}
