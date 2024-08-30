import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function CardOrder({ order }) {
    const navigate = useNavigate();

    const handleViewOrder = () => {
        navigate(`/myorder/${order.id}`); // Navegar a la vista de detalles de la orden
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">
                    Order Date: {order.date}
                </h3>
                <button
                    onClick={handleViewOrder}
                    className="text-blue-500 hover:text-blue-700 flex items-center space-x-2">
                    <span>View Order</span>
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </div>
            <div className="flex mt-4 space-x-4">
                <img
                    src={order.items[0].image} // Mostrar la imagen del primer producto
                    alt={order.items[0].title}
                    className="w-20 h-20 object-cover rounded-md shadow-sm"
                />
                <ul className="flex-1 mt-2 space-y-2">
                    {order.items.slice(0, 3).map(
                        (
                            item // Mostrar hasta 3 productos
                        ) => (
                            <li key={item.id} className="flex justify-between">
                                <span>
                                    {item.title} x {item.quantity}
                                </span>
                                <span>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="font-bold text-gray-700">Total:</span>
                <span className="font-bold text-gray-700">
                    ${order.total.toFixed(2)}
                </span>
            </div>
        </div>
    );
}
