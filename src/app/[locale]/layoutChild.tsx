"use client"
import React from "react";
import LanguageSelector from "@/app/components/LanguageSelector";
import { Provider } from "react-redux";
import store from "@/redux/store";

const layoutIndex = ({font, currentUrl, params, children}:any) => {
    return (
        <Provider store={store}>
            <body className={font.className}>
                <LanguageSelector locale={params.locale} currentUrl={currentUrl} />
                {children}
            </body>
        </Provider>
    );
};

export default layoutIndex;
