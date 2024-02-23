import { NextResponse } from "next/server";

export function middleware(request) {
    console.log('middleware ran');
    // if (request.nextUrl.pathname !== '/login') {
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ['/userslist/:path*']
}