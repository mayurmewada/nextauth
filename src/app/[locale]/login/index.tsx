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

    console.log(formData)

    const handleOnChange = ({ target }: any) => {
        const { name, value } = target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginSubmit = () => {
        dispatch(login(formData, router));
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
                <h1 className="mb-4">{lang.texts.loginToNextAuth}</h1>
                <p className="mb-7">{lang.errors.allFieldRequired}</p>
                <div className="flex flex-col gap-5">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                                {lang.fields.email.title}
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onChange={handleOnChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a69cac]" id="inline-email" type="email" placeholder="Jane Doe" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                {lang.fields.password.title}
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onChange={handleOnChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a69cac]" id="inline-password" type="password" placeholder="********" />
                        </div>
                    </div>
                    {/* <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">Send me your newsletter!</span>
                        </label>
                    </div> */}
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={handleLoginSubmit} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-[#a69cac] rounded shadow w-auto" type="button">
                                {isLoading ? (
                                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#a69cac" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="#a69cac" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                ) : (
                                    lang.buttons.login
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
