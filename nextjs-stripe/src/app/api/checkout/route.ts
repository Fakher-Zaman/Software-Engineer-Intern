import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
    const checkProducts = await stripe.products.list();
    const availableProducts = checkProducts.data.filter(
        (product: any) => product.active === true
    );
    return availableProducts;
};

export const POST = async (request: any) => {
    const { products } = await request.json();
    const data: Product[] = products;
    // console.log(data);

    let activeProducts = await getActiveProducts();

    try {
        for (const product of data) {
            const stripeProduct = activeProducts?.find(
                (stripeProduct: any) =>
                    stripeProduct?.name?.toLowerCase() == product?.name?.toLowerCase()
            );

            if (stripeProduct == undefined) {
                const prod = await stripe.products.create({
                    name: product.name,
                    default_price_data: product.price
                });
            }
        }
    } catch (error) {
        console.error("Error in creating a new product", error);
        throw error;
    }

    activeProducts = await getActiveProducts();
    let stripeItems: any = [];

    for (const product of data) {
        const stripeProduct = activeProducts?.find(
            (prod: any) => prod?.name?.toLowerCase() == product?.name?.toLowerCase()
        );

        // console.log(stripeProduct);

        if (stripeProduct) {
            stripeItems.push({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: stripeProduct.name // Pass an object with name property
                    },
                    unit_amount: product.price * 100, // Convert to cents
                },
                quantity: product.quantity,
            });
        }
    }

    // console.log(stripeItems);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'klarna'],
        line_items: stripeItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    return NextResponse.json({ url: session.url });
};