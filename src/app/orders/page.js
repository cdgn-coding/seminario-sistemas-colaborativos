"use client";

import useOrders from "@/hooks/useOrders";

export default function OrdersPage(props) {
    const {getAll} = useOrders()
    return (
        <section className={"w-full"}>
            <h1 className="text-2xl">Mis pedidos</h1>
            {getAll().length === 0 && <p>No hay pedidos</p>}
            {getAll().length > 0 && <table className={"table-auto w-full text-left"}>
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {getAll().map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{new Date(order.date).toLocaleDateString()}</td>
                        <td>{order.status || "pendiente"}</td>
                        <td>$ {order.total}</td>
                    </tr>
                ))}
                </tbody>
            </table>}
        </section>
    )
}