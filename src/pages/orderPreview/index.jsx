import React, { useContext, useState } from "react";
import { ShopiCartContext } from "../../components/context";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default function OrderPreview() {
    const { saveOrder } = useContext(ShopiCartContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const order = state?.order;

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!order) {
        return (
            <div className="text-center text-gray-500">
                No order to display.
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
        <div className="container mx-auto p-4 max-w-3xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Order Preview
            </h1>
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Order Details
                    </h2>
                    <span className="text-sm text-gray-400">
                        Date: {order.date}
                    </span>
                </div>
                <ul className="space-y-4">
                    {order.items.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h3 className="text-md font-medium text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-md font-semibold text-gray-800">
                                    {item.quantity} x ${item.price.toFixed(2)}
                                </p>
                                <p className="text-sm text-gray-600">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-800">
                        Total:
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                        ${order.total.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-end space-x-2 mt-6">
                    <button
                        onClick={handleCancelOrder}
                        className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition duration-150">
                        Cancel
                    </button>
                    <button
                        onClick={handleOpenModal}
                        className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-150">
                        Save Order
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Confirm Save Order
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Are you sure you want to save this order?
                        </p>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={handleCloseModal}
                                className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition duration-150">
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveOrder}
                                className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-150">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
