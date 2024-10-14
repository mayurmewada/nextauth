// module imports
"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, AppStore } from "@/redux/store"; // Import the AppDispatch type
import { login } from "@/redux/slices/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Index = ({ lang }: any) => {
    const router = useRouter();
    const [formData, setFormData] = useState<any>({});
    const dispatch: AppDispatch = useDispatch();
    const { isLoading }: any = useSelector((store: AppStore) => store.authSlice);

    const handleOnChange = ({ target }: any) => {
        const { name, value } = target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginSubmit = () => {
        dispatch(login(formData, router));
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                {isLoading && (
                    <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                )}
                <h1 className="mb-4">{lang.texts.loginToNextAuth}</h1>
                <p className="mb-7">{lang.errors.allFieldRequired}</p>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="email">{lang.fields.email.title}</label>
                        <input onChange={handleOnChange} className="border border-[#dddddd]" type="text" name="email" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">{lang.fields.password.title}</label>
                        <input onChange={handleOnChange} className="border border-[#dddddd]" type="password" name="password" />
                    </div>
                    <div className="flex flex-col">
                        <button onClick={handleLoginSubmit} className="rounded-[4px] border-[1px] border-slate-300 hover:border-slate-400">
                            {lang.buttons.login}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
