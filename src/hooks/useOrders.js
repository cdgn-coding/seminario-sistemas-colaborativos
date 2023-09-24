"use client";

export default function useOrders() {
    const createOrder = async (order) => {
        const response = await fetch("/api/orders", {
            method: "POST",
            body: JSON.stringify(order),
        })

        if (!response.ok) {
            throw new Error("Error creating order")
        }

        return response.json()
    }

    const storeOrderLocally = (order) => {
        const orders = JSON.parse(localStorage.getItem("orders")) || []
        orders.push(order)
        localStorage.setItem("orders", JSON.stringify(orders))
    }

    // Make API call, store in localStore, then redirect to /orders, usable inside react components
    const create = async (order) => {
        const result = await createOrder(order)
        storeOrderLocally(result)
        return result
    }

    const getAll = () => {
        if (typeof window === "undefined") {
            return []
        }
        return JSON.parse(window.localStorage.getItem("orders")) || []
    }

    return {
        create,
        getAll,
    }
}