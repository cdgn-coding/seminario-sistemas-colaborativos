"use client";

import ProductCard from './ProductCard'
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";

export default function Products() {
    const products = useProducts();
    const { getQuantity, add, remove } = useCart()
    return (
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        description={product.description}
                        price={product.price}
                        quantity={getQuantity(product)}
                        onAdd={() => add(product)}
                        onRemove={() => remove(product)}
                    />
                ))}
            </section>
    )
}
