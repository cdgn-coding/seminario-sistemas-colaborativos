import {useEffect, useState} from "react";

const products = [
    {
        name: "Flat white",
        imageUrl: "/products/flat-white.jpg",
        description: "Menor tamaño, más concentrado, más fuerte y menos amargo que un latte.",
        price: 500,
    },
    {
        name: "Latte",
        imageUrl: "/products/latte.jpg",
        description: "Mayor proporción de leche que de café.",
        price: 600,
    },
    {
        name: "Cappuccino",
        imageUrl: "/products/capuccino.jpg",
        description: "Espresso con leche y espuma de leche.",
        price: 500,
    },
    {
        name: "Cubano",
        imageUrl: "/products/cubano.jpg",
        description: "Espresso endulzado con azúcar morena.",
        price: 800,
    },
    {
        name: "Cold-brew",
        imageUrl: "/products/cold-brew.jpg",
        description: "Café de infusión en frío.",
        price: 700,
    },
    {
        name: "Irlandés",
        imageUrl: "/products/irlandes.jpg",
        description: "Café con whisky irlandés.",
        price: 1200,
    },
    {
        name: "Carajillo",
        imageUrl: "/products/carajillo.jpg",
        description: "Café con licor de Brandy.",
        price: 950,
    },
    {
        name: "Frappé Coffee",
        imageUrl: "/products/frappe.jpg",
        description: "Café con hielo cubierto de espuma elaborado a partir de café arábico.",
        price: 1100,
    },
    {
        name: "Medialunas (Saladas)",
        imageUrl: "/products/medialunassaladas.jpg",
        description: "Medialunas de hojaldre saladas.",
        price: 120,
    },
    {
        name: "Medialunas (Dulces)",
        imageUrl: "/products/medialunadulce.jpg",
        description: "Medialunas de hojaldre dulces.",
        price: 120,
    },
    {
        name: "Medialunas integrales",
        imageUrl: "/products/medialunaintegral.jpg",
        description: "Medialunas de manteca hecha con harinas integrales.",
        price: 150,
    },
    {
        name: "Facturas",
        imageUrl: "/products/facturas.jpg",
        description: "Factura a elección (con dulce de leche, membrillo, crema pastelera).",
        price: 190,
    },
    {
        name: "Café Molido Descafeinado",
        imageUrl: "/products/cafemolido.webp",
        description: "1 Kg. de Café molido descafeinado con un tostado medio.",
        price: 3500,
    },
    {
        name: "Café Molido Blend",
        imageUrl: "/products/cafemolido2.webp",
        description: "1 Kg. de café de tostado medio hecho con un blend especial.",
        price: 4300,
    },
    {
        name: "Café en Grano",
        imageUrl: "/products/cafeengrano.webp",
        description: "1 Kg de café arábico con un tostado medio. 1Kg.",
        price: 5300,
    }
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