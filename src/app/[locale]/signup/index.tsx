"use client";
import { signup } from "@/redux/slices/authSlice";
import { AppDispatch, AppStore } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = ({ lang }: any) => {
    const router = useRouter();
    const dispatch:AppDispatch = useDispatch();
    const {isLoading} = useSelector((store:AppStore) => store?.authSlice);

    const [formData, setFormData] = useState({});

    const handleOnChange = (e: any) => {
        // get keyboard click keys
        const { name, value } = e.target;
        // set in fromData name=""
        setFormData({ ...formData, [name]: value });
    };

    const handleOnSubmit = () => {
        dispatch(signup(formData, router))
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="mb-4">{lang.texts.signupToNextAuth}</h1>
            <p className="mb-7">{lang.errors.allFieldRequired}</p>
            <div className="flex flex-col gap-5">
                <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username">
                                {lang.fields.username.title}
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onChange={handleOnChange} name="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a69cac]" id="inline-username" type="text" placeholder="janedoe" />
                        </div>
                    </div>
                <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                                {lang.fields.email.title}
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onChange={handleOnChange} name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a69cac]" id="inline-email" type="email" placeholder="janedoe@mailprovider.com" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                {lang.fields.password.title}
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onChange={handleOnChange} name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#a69cac]" id="inline-password" type="password" placeholder="********" />
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
                            <button onClick={handleOnSubmit} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-[#a69cac] rounded shadow w-auto" type="button">
                                {isLoading ? (
                                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#a69cac" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="#a69cac" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                ) : (
                                    lang.buttons.signup
                                )}
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default index;
