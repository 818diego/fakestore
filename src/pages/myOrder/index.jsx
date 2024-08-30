import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopiCartContext } from "../../components/context";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default function MyOrder() {
    const { orders } = useContext(ShopiCartContext);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log("ID from URL:", id);

    const order = orders.find((order) => order.id === parseInt(id, 10));

    console.log("Orders:", orders);
    console.log("Order found:", order);

    if (!order) {
        return (
            <div className="text-center text-gray-500">Order not found.</div>
        );
    }

    const handleBackToOrders = () => {
        navigate("/myorders");
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <button
                onClick={handleBackToOrders}
                className="flex items-center text-blue-500 hover:text-blue-700 mb-6">
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                <span>Back to My Orders</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Order Details
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Order Details
                </h2>
                <p className="text-sm text-gray-500 mb-6">Date: {order.date}</p>
                <ul className="space-y-6">
                    {order.items.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center space-x-4 border-b border-gray-200 pb-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded-md shadow-sm"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-medium text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {item.description}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold text-gray-800">
                                    {item.quantity} x ${item.price.toFixed(2)}
                                </p>
                                <p className="text-md font-medium text-gray-600 mt-1">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                    <span className="text-xl font-bold text-gray-800">
                        Total:
                    </span>
                    <span className="text-xl font-bold text-gray-800">
                        ${order.total.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
