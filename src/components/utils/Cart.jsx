import { useContext, useState } from "react";
import { ShopiCartContext } from "../context/index";
import { XCircleIcon } from "@heroicons/react/16/solid";

export default function Cart() {
    const { cartItems, isCartOpen, closeCart } = useContext(ShopiCartContext);
    const [isClosing, setIsClosing] = useState(false);

    if (!isCartOpen && !isClosing) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            closeCart();
        }, 300);
    };

    return (
        <aside
            className={`w-[320px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-4 border border-gray-200
        rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out ${isClosing ? "animate-fadeOut" : "animate-fadeIn"
                }`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg text-gray-800">
                    Your Cart
                </h2>
                <div
                    className="cursor-pointer text-gray-400 hover:text-gray-600"
                    onClick={handleClose}>
                    <XCircleIcon className="w-5 h-5" />
                </div>
            </div>
            <ul className="p-4 overflow-y-auto flex-1">
                {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between mb-4 items-center">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-semibold text-gray-700">{item.title}</h3>
                            <p className="text-sm text-gray-500">{`$${item.price.toFixed(2)}`}</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm font-semibold text-gray-700 mr-2">{item.quantity}</span>
                            <span className="text-sm text-gray-500">x</span>
                            <span className="ml-2 text-sm font-semibold text-gray-700">{`$${(item.price * item.quantity).toFixed(2)}`}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
