import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = users;
    return NextResponse.json({ data });
}