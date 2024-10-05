// module imports
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareTokenDecode } from "./helpers/middlewareTokenDecode";

let locales = ["en", "hi"];
let defaultLocale = "en";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const getPathLocale = pathname.split("/")[1];
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);

    const isCookie: any = request.cookies.get("NEXT_TOKEN");
    const decodedToken = await middlewareTokenDecode(isCookie?.value);

    const isProtectedRoute = pathname.split("/")[2] == "profile";
    const isAdminProtectedRoute = pathname.split("/")[2] == "admin";

    if (isAdminProtectedRoute && !decodedToken?.isAdmin) {
        return NextResponse.error();
    }
    if ((isProtectedRoute || isAdminProtectedRoute) && !isCookie) {
        return NextResponse.redirect(new URL(`/${getPathLocale == "hi" ? "hi" : defaultLocale}/login`, request.url));
    }
    if (pathnameHasLocale) return;

    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/admin", "/profile", "/", "/(hi|en)/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
