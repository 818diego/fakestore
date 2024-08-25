import React, { createContext, useState, useEffect } from 'react';

export const ShopiCartContext = createContext();
export default function ShopiContext({ children }) {
    const [items, setItems] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error(error))
    }, []);

    const openDetail = () => {
        setIsDetailOpen(true);
    };

    const closeDetail = () => {
        setIsDetailOpen(false);
    };

    return (
        <ShopiCartContext.Provider value={{
            items,
            isDetailOpen,
            openDetail,
            closeDetail,
        }}>
            {children}
        </ShopiCartContext.Provider>
    )
}
