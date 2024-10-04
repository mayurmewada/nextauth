// module imports
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
    locales: ["en", "hi"],
    defaultLocale: "en",
});

export function middleware(request: NextRequest) {
    const isCookie = request.cookies.get("token");
    const cookie = request.cookies.get("NEXT_LOCALE");
    console.log(isCookie, cookie);
    const response = intlMiddleware(request);

    // Protected route logic
    const isProtectedRoute = request.nextUrl.pathname.split("/")[2] == "admin";

    if (isProtectedRoute && !isCookie) {
        const locale = request.nextUrl.pathname.startsWith("/hi") ? "hi" : "en";
        return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
    }

    return response;
}

export const config = {
    matcher: ["/admin", "/", "/(hi|en)/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
