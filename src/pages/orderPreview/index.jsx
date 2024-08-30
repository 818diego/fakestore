import React, { useContext, useState } from "react";
import { ShopiCartContext } from "../../components/context";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline";

export default function OrderPreview() {
    const { saveOrder } = useContext(ShopiCartContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const order = state?.order;

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!order) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <p className="text-lg font-bold text-red-500">No order to display.</p>
            </div>
        );
    }

    const handleSaveOrder = () => {
        saveOrder(order);
        navigate("/myorders");
    };

    const handleCancelOrder = () => {
        navigate("/");
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white py-12 px-6">
            <h1 className="text-4xl font-extrabold mb-8 text-center">Order Preview</h1>
            <div className="bg-gray-700 shadow-xl rounded-2xl p-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center border-b border-gray-600 pb-4">
                    Order Details
                </h2>
                <p className="text-sm text-gray-300 text-center mb-8">
                    Placed on {order.date}
                </p>
                <ul className="divide-y divide-gray-600">
                    {order.items.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between py-6">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-lg shadow-lg"
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
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        onClick={handleCancelOrder}
                        className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
                        Cancel
                    </button>
                    <button
                        onClick={handleOpenModal}
                        className="py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition">
                        Save Order
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm w-full text-white">
                        <h3 className="text-lg font-semibold mb-4">
                            Confirm Save Order
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Are you sure you want to save this order?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveOrder}
                                className="py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
