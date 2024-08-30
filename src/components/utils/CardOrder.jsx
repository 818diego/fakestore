import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/solid";

export default function CardOrder({ order }) {
    const navigate = useNavigate();

    const handleViewOrder = () => {
        navigate(`/myorder/${order.id}`);
    };

    return (
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-6 w-6 text-gray-500" />
                    <h3 className="text-lg font-semibold text-gray-800">
                        {order.date}
                    </h3>
                </div>
                <button
                    onClick={handleViewOrder}
                    className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                    <span>View Order</span>
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </div>
            <div className="flex mt-6 space-x-4">
                <img
                    src={order.items[0].image}
                    alt={order.items[0].title}
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                />
                <ul className="flex-1 space-y-2">
                    {order.items.slice(0, 3).map(item => (
                        <li key={item.id} className="flex justify-between">
                            <span className="text-gray-700">
                                {item.title} x {item.quantity}
                            </span>
                            <span className="text-gray-800 font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                    <span className="font-bold text-gray-800">Total:</span>
                </div>
                <span className="font-bold text-gray-800">
                    ${order.total.toFixed(2)}
                </span>
            </div>
        </div>
    );
}
