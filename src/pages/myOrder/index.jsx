import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopiCartContext } from "../../components/context";
import { ArrowLeftIcon } from "@heroicons/react/outline";

export default function MyOrder() {
    const { orders } = useContext(ShopiCartContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const order = orders.find((order) => order.id === parseInt(id, 10));

    if (!order) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <p className="text-lg font-bold text-red-500">Order not found.</p>
            </div>
        );
    }

    const handleBackToOrders = () => {
        navigate("/myOrders");
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white py-12 px-6">
            <button
                onClick={handleBackToOrders}
                className="flex items-center text-green-400 hover:text-green-600 mb-8 transition duration-300 ease-in-out">
                <ArrowLeftIcon className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">Back to My Orders</span>
            </button>
            <h1 className="text-4xl font-extrabold mb-8 text-center">Order Details</h1>
            <div className="bg-gray-700 shadow-xl rounded-2xl p-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center border-b border-gray-600 pb-4">
                    Order Details
                </h2>
                <p className="text-sm text-gray-300 text-center mb-8">Date: {order.date}</p>
                <ul className="divide-y divide-gray-600">
                    {order.items.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between py-6">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                                />
                                <div>
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p className="text-sm text-gray-400 mt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold text-green-400">
                                    {item.quantity} x ${item.price.toFixed(2)}
                                </p>
                                <p className="text-xl font-bold mt-2">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-600">
                    <span className="text-2xl font-extrabold">Total:</span>
                    <span className="text-2xl font-extrabold text-green-400">
                        ${order.total.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
