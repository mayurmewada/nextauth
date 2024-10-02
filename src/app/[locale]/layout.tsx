// Mark this as a Client Component
"use client";

// module imports
import { Inter } from "next/font/google";
// file imports
import "./globals.css";
import LanguageSelector from "@/app/components/LanguageSelector";
import { Provider } from "react-redux";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
    params,
}: // `url` should be a string representing the full current URL
Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>) {
    // Get the full URL from the request context or window location
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    console.log("first")

    return (
        <Provider store={store}>
            <html lang={params.locale}>
                <body className={inter.className}>
                    <LanguageSelector locale={params.locale} currentUrl={currentUrl} />
                    {children}
                </body>
            </html>
        </Provider>
    );
}
