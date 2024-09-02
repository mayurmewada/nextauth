// module imports
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "hi"],

    // Used when no locale matches
    defaultLocale: "en",
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(hi|en)/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
