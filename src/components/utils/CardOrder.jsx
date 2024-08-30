import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function CardOrder({ order }) {
    const navigate = useNavigate();

    const handleViewOrder = () => {
        navigate(`/myorder/${order.id}`);
    };

    return (
        <div className="bg-gray-700 shadow-lg rounded-xl p-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-300">
                    Order Date: {order.date}
                </h3>
                <button
                    onClick={handleViewOrder}
                    className="text-green-400 hover:text-green-600 flex items-center space-x-2 transition duration-300 ease-in-out">
                    <span>View Order</span>
                    <ArrowRightIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="flex mt-6 space-x-4">
                <img
                    src={order.items[0].image}
                    alt={order.items[0].title}
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <ul className="flex-1 mt-2 space-y-3 text-gray-300">
                    {order.items.slice(0, 3).map((item) => (
                        <li key={item.id} className="flex justify-between">
                            <span className="mr-4">
                                {item.title} x {item.quantity}
                            </span>
                            <span className="text-green-400">
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between mt-6 pt-4 border-t border-gray-600">
                <span className="font-bold text-gray-300">Total:</span>
                <span className="font-bold text-green-400">
                    ${order.total.toFixed(2)}
                </span>
            </div>
        </div>
    );
}
