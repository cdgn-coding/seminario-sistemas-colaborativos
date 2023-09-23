/*

                <ProductCard
                    name="Flat white"
                    imageUrl="/products/flat-white.jpg"
                    description="Menor tamaño, más concentrado, más fuerte y menos amargo que un latte."
                    price={35}
                />
                <ProductCard
                    name="Latte"
                    imageUrl="/products/latte.jpg"
                    description="Mayor proporción de leche que de café."
                    price={35}
                    quantity={3}
                />
                <ProductCard
                    name="Cappuccino"
                    imageUrl="/products/capuccino.jpg"
                    description="Espresso con leche y espuma de leche."
                    price={35}
                />
                <ProductCard
                    name="Cubano"
                    imageUrl="/products/cubano.jpg"
                    description="Espresso endulzado con azúcar morena."
                    price={35}
                />
                <ProductCard
                    name="cold-brew"
                    imageUrl="/products/cold-brew.jpg"
                    description="Café de infusión en frío."
                    price={35}
                />
                <ProductCard
                    name="Irlandés"
                    imageUrl="/products/irlandes.jpg"
                    description="Café con whisky irlandés."
                    price={35}
                />
                <ProductCard
                    name="Carajillo"
                    imageUrl="/products/carajillo.jpg"
                    description="Café con licor de Brandy."
                    price={35}
                />
 */

export default function useProducts() {
    return [
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
}