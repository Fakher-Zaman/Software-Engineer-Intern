import { NextResponse } from "next/server";

export async function POST(req, res) {
    let { email, password } = await req.json();
    console.log(email, password);

    if (!email || !password) {
        return NextResponse.json(
            { error: "required filed not found" },
            { status: 400 }
        );
    }

    return NextResponse.json({ res: "data send successfully" });
}