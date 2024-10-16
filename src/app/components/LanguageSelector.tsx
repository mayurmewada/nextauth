"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logoutUser } from "@/redux/slices/userSlice";

const LanguageSelector = ({ locale, currentUrl }: { locale: string; currentUrl: string }) => {
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    let url = pathname.split("/").splice(1);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = event.target.value;

        url[0] = selectedLocale;
        router.push(`/${url.join("/")}`);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="flex justify-center my-3">
            <select className="" onChange={handleLanguageChange} value={locale} name="localeSelect">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
            </select>
            <i onClick={handleLogout} className="ri-logout-box-r-line cursor-pointer text-[18px] font-semibold ml-7"></i>
        </div>
    );
};

export default LanguageSelector;
