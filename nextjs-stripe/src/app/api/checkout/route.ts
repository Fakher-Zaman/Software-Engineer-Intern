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

            if (stripeProduct == undefined) {
                const prod = await stripe.products.create({
                    name: product.name,
                    default_price_data: {
                        unit_amount: product.price * 100,
                        currency: "usd",
                    },
                });
            }
        }
    } catch (error) {
        console.error("Error in creating a new product", error);
        throw error;
    }

    const prods = await stripe.products.list();
    console.log(prods);

    return NextResponse.json({ url: "" });
};