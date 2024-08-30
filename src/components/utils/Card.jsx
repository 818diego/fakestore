import { useContext, useMemo } from "react";
import { ShopiCartContext } from "../context/index";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

export default function Card({ data }) {
    Card.propTypes = {
        data: PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired,
    };
    const { openDetail, addToCart } = useContext(ShopiCartContext);

    const formattedPrice = useMemo(
        () => `$${data.price.toFixed(2)}`,
        [data.price]
    );

    return (
        <div
            className="relative flex flex-col text-gray-700 bg-white rounded-xl w-56 h-[350px] mt-6"
            role="button"
            aria-label={`View details of ${data.title}`}>
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl h-40"
                onClick={() => openDetail(data)}
            >
                <img
                    src={data.image}
                    alt={data.title}
                    className="object-cover w-full h-full rounded-t-xl transition-transform transform hover:scale-110"
                    loading="lazy"
                />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2 max-h-10 overflow-hidden">
                        {data.title}
                    </p>
                    <p className="text-lg font-semibold text-blue-700">
                        {formattedPrice}
                    </p>
                </div>
                <div>
                    <button
                        className="w-full py-2 text-white bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none"
                        type="button"
                        aria-label={`Add ${data.title} to cart`}
                        onClick={() => addToCart(data)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
