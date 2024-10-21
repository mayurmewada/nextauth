"use client";
import { verifyEmail } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Index = ({ lang, userToken }: any) => {
    const dispatch: AppDispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(verifyEmail({token: userToken.token}));
    };

    return (
        <div className="container">
            <div className="flex justify-center items-center min-h-[80vh]">
                <div className="flex flex-col items-center gap-5">
                    <p>Click below verify to verify the user</p>
                    <button onClick={handleOnClick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-auto">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
