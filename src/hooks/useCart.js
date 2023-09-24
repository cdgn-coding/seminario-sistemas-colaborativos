"use client";

import { useState, useEffect } from 'react';

export default function useCart() {
    const [cart, setCart] = useState({});

    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    const saveCart = (cart) => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    const add = (product) => {
        const quantity = cart[product.name] || 0;
        const newCart = {
            ...cart,
            [product.name]: quantity + 1,
        }
        setCart(newCart);
        saveCart(newCart);
    };

    const remove = (product) => {
        const quantity = cart[product.name] || 0;
        if (quantity > 0) {
            const newCart = {
                ...cart,
                [product.name]: quantity - 1,
            }
            setCart(newCart);
            saveCart(newCart);
        }
    };

    const clean = () => {
        saveCart({});
    }

    const getQuantity = (product) => {
        return cart[product.name] || 0;
    }

    const isEmpty = () => {
        return Object.keys(cart).length === 0;
    }

    return { getQuantity, add, remove, clean, isEmpty };
}