import ProductCard from './ProductCard'

export default function Products() {
    return (
        <main className="p-24">
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <ProductCard />
                <ProductCard />
            </section>
        </main>
    )
}
