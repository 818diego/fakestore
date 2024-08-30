import { createContext, useState, useEffect } from "react";

export const ShopiCartContext = createContext();

export default function ShopiContext({ children }) {
    const [items, setItems] = useState([]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [productToShow, setProductToShow] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(
                (cartItem) => cartItem.id === item.id
            );
            if (itemExists) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
        openCart();
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== itemId)
        );
    };

    const incrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === itemId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
            prevItems
                .map((cartItem) =>
                    cartItem.id === itemId && cartItem.quantity > 1
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter((cartItem) => cartItem.quantity > 0)
        );
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error(error));
    }, []);

    const openDetail = (product) => {
        setProductToShow(product);
        setIsDetailOpen(true);
        setIsCartOpen(false);
    };

    const closeDetail = () => {
        setIsDetailOpen(false);
        setProductToShow(null);
    };

    const openCart = () => {
        setIsDetailOpen(false);
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const checkout = () => {
        const newOrder = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            items: cartItems,
            total: cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            ),
        };
        setCartItems([]);
        closeCart();
        return newOrder;
    };

    const saveOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <ShopiCartContext.Provider
            value={{
                items,
                isDetailOpen,
                productToShow,
                openDetail,
                closeDetail,
                cartItems,
                isCartOpen,
                openCart,
                closeCart,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                checkout,
                saveOrder,
                orders,
                toggleCart,
            }}>
            {children}
        </ShopiCartContext.Provider>
    );
}
