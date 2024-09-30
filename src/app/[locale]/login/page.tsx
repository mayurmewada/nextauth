// module imports
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
    const t = useTranslations("login");

    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <h1 className="mb-4">{t("loginToNextAuth")}</h1>
            <p className="mb-7">{t("allFieldRequired")}</p>
            <form className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label htmlFor="email">{t("formEmailLabel")}</label>
                    <input className="border border-[#dddddd]" type="text" name="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">{t("formPasswordLabel")}</label>
                    <input className="border border-[#dddddd]" type="password" name="password" />
                </div>
                <div className="flex flex-col">
                    <button type="submit" className="rounded-[4px] border-[1px] border-slate-300 hover:border-slate-400">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Page;