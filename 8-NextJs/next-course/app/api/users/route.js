import { NextResponse } from "next/server";

export async function POST(req, res) {
    let { name, age, email } = await req.json();
    console.log(name, age, email);

    if (!name || !age || !email) {
        return NextResponse.json(
            { error: "required filed not found", ok: false },
            { status: 400 }
        );
    }

    return NextResponse.json(
        {
            res: "Credentials verified, User successfully loggin in.",
            ok: true,
        },
        { status: 200 }
    );
}