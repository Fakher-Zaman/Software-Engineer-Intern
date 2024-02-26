import { users } from '@/app/utils/db';
import { NextResponse } from 'next/server';

// 1. All Users Data
export function GET() {
    const data = users;
    return NextResponse.json({ data }, { status: 200 });
}