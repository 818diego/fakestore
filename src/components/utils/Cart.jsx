import { useContext, useState, useMemo, useEffect } from "react";
import { ShopiCartContext } from "../context/index";
import { XCircleIcon, TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

export default function Cart() {
    const { cartItems, isCartOpen, closeCart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(ShopiCartContext);
    const [isClosing, setIsClosing] = useState(false);

    // Calcular el total del carrito
    const cartTotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }, [cartItems]);

    useEffect(() => {
        if (!isCartOpen) {
            setIsClosing(false);
        }
    }, [isCartOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            closeCart();
        }, 300);
    };

    if (!isCartOpen && !isClosing) return null;

    return (
        <aside
            className={`w-[320px] h-[calc(100vh-80px)] top-[68px] flex flex-col fixed right-4 border border-gray-200
        rounded-xl bg-white shadow-lg transition-transform duration-300 ease-in-out ${isClosing ? "animate-fadeOut" : "animate-fadeIn"
                } overflow-y-auto`}>
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
            <ul className="p-4 flex-1 space-y-4 overflow-y-auto">
                {cartItems.map((item, index) => (
                    <li key={index} className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-semibold text-gray-700">{item.title}</h3>
                            <p className="text-sm text-gray-500">{`$${item.price.toFixed(2)}`}</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-2">
                                <button onClick={() => decrementQuantity(item.id)} className="text-gray-700 hover:text-gray-800">
                                    <MinusIcon className="w-5 h-5" />
                                </button>
                                <span className="text-sm font-semibold text-gray-700">{item.quantity}</span>
                                <button onClick={() => incrementQuantity(item.id)} className="text-gray-700 hover:text-gray-800">
                                    <PlusIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-semibold text-gray-700">{`$${(item.price * item.quantity).toFixed(2)}`}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-700 hover:text-red-800">
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-lg font-semibold text-gray-800">{`$${cartTotal}`}</span>
                </div>
                <button className="w-full py-2 text-white bg-green-700 hover:bg-green-600 rounded-lg shadow-md transition">
                    Checkout
                </button>
            </div>
        </aside>
    );
}
