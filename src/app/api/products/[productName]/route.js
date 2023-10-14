import {getStock, defaultStock, setStock} from "@/services/products";
import {NextResponse as NextApiResponse, NextRequest} from "next/server";

export async function GET(req, { params }) {
    try {
        const stock = await getStock(params.productName)
        return NextApiResponse.json({stock});
    } catch (error) {
        return NextApiResponse.json({stock: defaultStock});
    }
}

export async function PUT(req, { params }) {
    const {stock} = req.body;
    await setStock(params.productName, stock);
    return NextApiResponse.json({stock});
}