"use client";
import { signup } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const index = ({ lang }: any) => {
    const dispatch:AppDispatch = useDispatch();

    const [formData, setFormData] = useState({});

    const handleOnChnage = (e: any) => {
        // get keyboard click keys
        const { name, value } = e.target;
        // set in fromData
        setFormData({ ...formData, [name]: value });
    };

    const handleOnSubmit = () => {
        console.log(formData);
        dispatch(signup(formData))
    };

    return (
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <h1 className="mb-4">{lang.texts.signupToNextAuth}</h1>
            <p className="mb-7">{lang.errors.allFieldRequired}</p>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label htmlFor="username">{lang.fields.username.title}</label>
                    <input onChange={handleOnChnage} className="border border-[#dddddd]" type="text" name="username" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">{lang.fields.email.title}</label>
                    <input onChange={handleOnChnage} className="border border-[#dddddd]" type="text" name="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">{lang.fields.password.title}</label>
                    <input onChange={handleOnChnage} className="border border-[#dddddd]" type="password" name="password" />
                </div>
                <div className="flex flex-col">
                    <button onClick={handleOnSubmit} className="rounded-[4px] border-[1px] border-slate-300 hover:border-slate-400">{lang.buttons.signup}</button>
                </div>
            </div>
        </div>
    );
};

export default index;
