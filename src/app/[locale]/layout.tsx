// module imports
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
// file imports
import "./globals.css";
import Page from "./layoutChild";

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

    return (
        <html lang={params.locale}>
            <Page font={inter} currentUrl={currentUrl} params={params} children={children} />
        </html>
    );
}
