// module imports
"use client";
import { getAllUsers } from "@/redux/slices/adminSlice";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, AppStore } from "@/redux/store"; // Import the AppDispatch type

const Index = (t: any) => {
    const [email, setEmail] = useState<any>("demouser@domain.com");
    const dispatch: AppDispatch = useDispatch();
    const loading = useSelector((store: AppStore) => store.admin);

    console.log(loading);

    const handleLoginSubmit = () => {
        dispatch(getAllUsers(email));
    };

    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <h1 className="mb-4">{"loginToNextAuth"}</h1>
            <p className="mb-7">{"allFieldRequired"}</p>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label htmlFor="email">{"formEmailLabel"}</label>
                    <input className="border border-[#dddddd]" type="text" name="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">{"formPasswordLabel"}</label>
                    <input className="border border-[#dddddd]" type="password" name="password" />
                </div>
                <div className="flex flex-col">
                    <button onClick={handleLoginSubmit} className="rounded-[4px] border-[1px] border-slate-300 hover:border-slate-400">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
