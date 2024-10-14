"use client";
import React from "react";
import LanguageSelector from "@/app/components/LanguageSelector";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";

const layoutIndex = ({ font, currentUrl, params, children }: any) => {
    return (
        <Provider store={store}>
            <head></head>
            <body className={font.className}>
                <Toaster position="bottom-right" />
                <LanguageSelector locale={params.locale} currentUrl={currentUrl} />
                {children}
            </body>
        </Provider>
    );
};

export default layoutIndex;
