// module imports
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const intlMiddleware = createMiddleware({
//     locales: ["en", "hi"],
//     defaultLocale: "en",
// });

let locales = ["en", "hi"];
let defaultLocale = "en";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);

    if (pathnameHasLocale) return;

    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;

    const isCookie = request.cookies.get("token");
    const cookie = request.cookies.get("NEXT_LOCALE");
    console.log(isCookie, cookie);

    // Protected route logic
    const isProtectedRoute = request.nextUrl.pathname.split("/")[2] == "admin";

    if (isProtectedRoute && !isCookie) {
        return NextResponse.redirect(new URL(`/${pathnameHasLocale || defaultLocale}/login`, request.url));
    }

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/admin", "/", "/(hi|en)/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
