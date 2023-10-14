import {kv} from '@vercel/kv';

export const defaultStock = 1000000

export async function getStock(productName) {
    const stock = await kv.get(productName)
    if (!stock) {
        await setStock(productName, defaultStock)
        return defaultStock
    }
    return stock
}

export async function setStock(productName, quantity) {
    return await kv.set(productName, quantity)
}

export async function reduceStock(productName, quantity) {
    const stock = await getStock(productName)
    if (stock < quantity) {
        throw new Error(`No hay suficiente stock para el producto ${productName}`)
    }
    const newStock = stock - quantity
    await setStock(productName, newStock)
    return newStock
}