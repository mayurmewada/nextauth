import React from "react";
import { useTranslations } from "next-intl";
import Page from "./index";
import { getDictionary } from "../dictionaries";

const page = async ({ params: { locale } }: any) => {
    const lang = await getDictionary(locale);
    return <Page lang={lang} />;
};

export default page;
