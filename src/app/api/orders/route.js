import {kv} from '@vercel/kv';
import z from 'zod';
import {NextResponse as NextApiResponse} from "next/server";

function createNumericShortId(length = 6) {
    const alphabet = "0123456789"
    let id = ""

    for (let i = 0; i < length; i++) {
        id += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }

    return id
}

const orderSchema = z.object({
    fullname: z.string().nonempty({message: "El nombre es requerido"}),
    address: z.string().nonempty({message: "La dirección es requerida"}),
    zipCode: z.string().nonempty({message: "El código postal es requerido"}),
    products: z.array(z.object({
        name: z.string().nonempty({message: "El nombre es requerido"}),
        price: z.number().nonnegative({message: "El precio debe ser mayor a 0"}),
        quantity: z.number().nonnegative({message: "La cantidad debe ser mayor a 0"}),
    })).nonempty({message: "Los productos son requeridos"}),
})

export async function POST(req) {
    const body = await req.json()

    try {
        orderSchema.parse(body)
    } catch (error) {
        console.error(error)
        return new Response(null, {
            status: 400,
            statusText: "Bad Request",
        })
    }

    try {
        const id = createNumericShortId()
        const total = body.products.reduce((acc, product) => {
            return acc + product.price * product.quantity
        }, 0)
        const order = {
            id,
            fullname: body.fullname,
                address: body.address,
            zipCode: body.zipCode,
            products: body.products,
            date: new Date().toISOString(),
            status: "pendiente",
            total,
        }
        await kv.set(id, order)
        return NextApiResponse.json(order);
    } catch (error) {
        console.error(error)
        return new Response(null, {
            status: 500,
            statusText: "Internal Server Error",
        })
    }
}