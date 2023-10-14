import {useEffect, useState} from "react";

const products = [
    {
        name: "Flat white",
        imageUrl: "/products/flat-white.jpg",
        description: "Menor tamaño, más concentrado, más fuerte y menos amargo que un latte.",
        price: 35,
    },
    {
        name: "Latte",
        imageUrl: "/products/latte.jpg",
        description: "Mayor proporción de leche que de café.",
        price: 35,
    },
    {
        name: "Cappuccino",
        imageUrl: "/products/capuccino.jpg",
        description: "Espresso con leche y espuma de leche.",
        price: 35,
    },
    {
        name: "Cubano",
        imageUrl: "/products/cubano.jpg",
        description: "Espresso endulzado con azúcar morena.",
        price: 35,
    },
    {
        name: "cold-brew",
        imageUrl: "/products/cold-brew.jpg",
        description: "Café de infusión en frío.",
        price: 35,
    },
    {
        name: "Irlandés",
        imageUrl: "/products/irlandes.jpg",
        description: "Café con whisky irlandés.",
        price: 35,
    },
    {
        name: "Carajillo",
        imageUrl: "/products/carajillo.jpg",
        description: "Café con licor de Brandy.",
        price: 35,
    },
]

const getStock = async (productName) => {
    const response = await fetch(`/api/products/${productName}`)

    if (!response.ok) {
        throw new Error("Error getting stock")
    }

    return response.json()
}

const setStock = async (productName, stock) => {
    const response = await fetch(`/api/products/${productName}`, {
        method: "PUT",
        body: JSON.stringify({stock}),
    })

    if (!response.ok) {
        throw new Error("Error saving stock")
    }

    return response.json()
}

export default function useProducts() {
    const [loadingStock, setLoadingStock] = useState(true)
    const [allStock, setAllStock] = useState({})
    useEffect(() => {
        let getAllStock = products.map(product => getStock(product.name));
        Promise.allSettled(getAllStock).then(results => {
            results.forEach((result, index) => {
                if (result.status === "fulfilled") {
                    setAllStock(prev => ({
                        ...prev,
                        [products[index].name]: result.value.stock
                    }))
                }
            })
            setLoadingStock(false)
        })
    }, [])

    const getStockState = (product) => {
        return allStock[product.name]
    }

    const saveStock = (product, stock) => {
        setAllStock(prev => ({
            ...prev,
            [product.name]: stock
        }))
        setStock(product.name, stock)
            .then(() => {
                console.log("Stock guardado correctamente")
            }).catch((error) => {
                console.error(error)
                alert('Error guardando stock, intente de nuevo')
            })
    }

    return [products, getStockState, saveStock, loadingStock]
}