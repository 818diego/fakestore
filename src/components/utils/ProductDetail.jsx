import { useContext, useState } from "react";
import { ShopiCartContext } from "../context/index";
import { XCircleIcon } from "@heroicons/react/solid";

export default function ProductoDetail() {
    const { isDetailOpen, closeDetail, productToShow } =
        useContext(ShopiCartContext);
    const [isClosing, setIsClosing] = useState(false);

    if (!isDetailOpen && !isClosing) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            closeDetail();
        }, 300);
    };

    return (
        <aside
            className={`w-[320px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-4 border border-gray-200
        rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out ${
            isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg text-gray-800">
                    Product Details
                </h2>
                <div
                    className="cursor-pointer text-gray-400 hover:text-gray-600"
                    onClick={handleClose}>
                    <XCircleIcon className="w-5 h-5" />
                </div>
            </div>
            <div className="p-4">
                <figure className="mb-4">
                    <img
                        className="w-3/4 h-auto mx-auto rounded-lg shadow-sm"
                        src={productToShow.image}
                        alt={productToShow.title}
                    />
                </figure>
                <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {productToShow.title}
                    </h3>
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                        ${productToShow.price}
                    </p>
                    <p className="text-sm text-gray-600">
                        {productToShow.description}
                    </p>
                </div>
            </div>
        </aside>
    );
}
