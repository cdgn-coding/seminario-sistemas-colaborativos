import ProductCard from './ProductCard'

export default function Products() {
    return (
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                    name="Flat white"
                    imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    description="Menor tamaño, más concentrado, más fuerte y menos amargo que un latte."
                    price={35}
                />
                <ProductCard
                    name="Latte"
                    imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    description="Mayor proporción de leche que de café."
                    price={35}
                    quantity={3}
                />
            </section>
    )
}
