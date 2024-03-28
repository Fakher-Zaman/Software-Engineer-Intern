import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
    const checkProducts = await stripe.products.list();
    const availableProducts = checkProducts.data.filter((product: any) => product.active === true);

    return availableProducts;
}

export const POST = async (request: any) => {
    const { products } = await request.json();
    const data: Product[] = products;

    let activeProducts = await getActiveProducts();

    try {
        for (const product of data) {
            const stripeProduct = activeProducts?.find(
                (stripeProduct: any) => {
                    stripeProduct?.name?.toLowerCase() == product?.name?.toLowerCase();
                }
            )
        }
    } catch (error) {

    }

    const prods = await stripe.products.list();
    console.log(prods);

    return NextResponse.json({ url: "" });
};