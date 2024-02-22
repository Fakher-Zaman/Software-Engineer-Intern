import { NextResponse } from "next/server";

export function GET(_, res) {
    // console.log(res.params.id);
    const { id } = res.params;

    return NextResponse.json({ id: id });
}