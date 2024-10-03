import React from "react";
import { useTranslations } from "next-intl";
import Page from "./index";

const page = () => {
    console.log(useTranslations("login"));
    const t = useTranslations("login");
    return <Page />;
};

export default page;
