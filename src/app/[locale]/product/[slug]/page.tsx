
import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
    const t = useTranslations("productDetails");
    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <p className="text-center text-[32px]">{t("youAreViewingProduct")}</p>
        </div>
    );
};

export default page;
