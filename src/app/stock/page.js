"use client";

import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

function ProductCard({name, imageUrl, stock, onSave}) {
    const [currentStock, setCurrentStock] = useState(stock)
    return (
        <div className="w-full h-16 flex flex-row justify-start items-center space-x-0.5">
            <div
                className="aspect-h-1 aspect-w-1 h-full w-16 overflow-hidden relative">
                <Image src={imageUrl}
                       alt="Front of men&#039;s Basic Tee in black."
                       className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                       fill
                />
            </div>
            <span className="w-32">{name}</span>
            <div className="w-32">
                <Input
                    value={currentStock}
                    type={"number"}
                    pattern="\d+"
                    onChange={(e) => setCurrentStock(e.target.value)}
                />
            </div>
            <Button onClick={() => onSave(currentStock)}>Guardar</Button>
        </div>
    );
}

export default function Products() {
    const [products, getStock, saveStock, loadingStock] = useProducts();
    return (
        <section className="w-full">
            <h1 className="text-2xl">Manejar stock</h1>
            {!loadingStock && <section className="flex flex-col relative space-y-2">
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        stock={getStock(product)}
                        onSave={(stock) => saveStock(product, stock)}
                    />
                ))}
            </section>}
        </section>
    )
}
