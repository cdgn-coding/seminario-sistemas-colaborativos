"use client";

import Image from 'next/image';
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";
import OrderForm from './OrderForm'
import useOrders from "@/hooks/useOrders";
import { useRouter } from 'next/navigation'

export default function Continue(props) {
    const products = useProducts();
    const { getQuantity, clean: cleanCart, isEmpty } = useCart()
    const { create } = useOrders()
    const router = useRouter()

    if (isEmpty()) {
        return (
            <section className="md:w-2/3 md:p-0 w-full px-4">
                <h1 className="text-2xl text-left">Realizar pedido</h1>
                <section className="flex flex-col mt-4 space-y-4">
                    <div className="flex flex-col max-w-sm">
                        <section className="flex flex-col spacing-y-2">
                            <p>No hay productos en el carrito. Regrese al inicio y seleccione algunos productos.</p>
                        </section>
                    </div>
                </section>
            </section>
        )
    }

    const price = products.filter(product => getQuantity(product) > 0).reduce((acc, product) => {
        const quantity = getQuantity(product);
        return acc + quantity * product.price;
    }, 0);

    const onSubmit = async (data) => {
        const order = {
            fullname: data.fullname,
            address: data.address,
            zipCode: data.zipCode,
            products: products.filter(product => getQuantity(product) > 0).map(product => ({
                name: product.name,
                price: product.price,
                quantity: getQuantity(product),
            })),
        }

        await create(order)
        cleanCart()
        router.push("/orders")
    }

    return (
        <section className="md:w-2/3 md:p-0 w-full px-4">
            <h1 className="text-2xl text-left">Realizar pedido</h1>
            <section className="flex flex-col mt-4 space-y-4">
                <div className="flex flex-col max-w-sm">
                    <section className="flex flex-col spacing-y-2">
                        {products.filter(product => getQuantity(product) > 0).map((product) => (
                            <div className="flex flex-row h-12 w-full mb-4" key={product.name}>
                                <div className="h-full w-12 relative">
                                    <Image alt={product.name} src={product.imageUrl} fill className="object-cover w-auto h-full" />
                                </div>
                                <div className="flex flex-col justify-center ml-2">
                                    <h3 className="text-sm text-gray-700">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900">$ {product.price} x {getQuantity(product)}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                    <div className="flex flex-row items-center content-center space-x-4">
                        <p className="text-sm font-medium text-gray-900">Total </p>
                        <p className="text-sm font-medium text-gray-900">$ {price}</p>
                    </div>
                </div>
                <div className="w-full">
                    <OrderForm onSubmit={onSubmit} />
                </div>
            </section>
        </section>
    )
}