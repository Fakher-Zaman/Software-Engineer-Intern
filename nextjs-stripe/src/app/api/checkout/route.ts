import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const POST = async (request: any) => {
    const { products } = await request.json();
    const data: Product[] = products;

    const prods = await stripe.products.list();
    console.log(prods);

    return NextResponse.json({ url: "" });
};