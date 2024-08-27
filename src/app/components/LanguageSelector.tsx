"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const LanguageSelector = ({ locale, currentUrl }: { locale: string; currentUrl: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    let url = pathname.split("/").splice(1);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = event.target.value;

        url[0] = selectedLocale;
        router.push(`/${url.join("/")}`);
    };

    return (
        <div className="flex flex-col">
            <select className="mx-auto" onChange={handleLanguageChange} value={locale} name="localeSelect">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
