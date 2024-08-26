import { createContext, useState, useEffect } from "react";

export const ShopiCartContext = createContext();

export default function ShopiContext({ children }) {
    const [items, setItems] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [productToShow, setProductToShow] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error(error));
    }, []);

    const openDetail = (product) => {
        setProductToShow(product);
        setIsDetailOpen(true);
    };

    const closeDetail = () => {
        setIsDetailOpen(false);
        setProductToShow(null);
    };

    return (
        <ShopiCartContext.Provider
            value={{
                items,
                isDetailOpen,
                productToShow,
                openDetail,
                closeDetail,
            }}>
            {children}
        </ShopiCartContext.Provider>
    );
}
