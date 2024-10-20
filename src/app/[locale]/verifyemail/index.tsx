"use client";
import { verifyEmail } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Index = ({ lang, userToken }: any) => {
    const dispatch: AppDispatch = useDispatch();
    console.log(userToken.token);

    const handleOnClick = () => {
        dispatch(verifyEmail({token: userToken.token}));
    };

    return (
        <div className="container">
            <div className="flex justify-center items-center min-h-[80vh]">
                <div className="flex flex-col items-center gap-5">
                    <p>Click below verify to verify the user</p>
                    <button onClick={handleOnClick} className="rounded-[4px] border-[1px] border-slate-300 hover:border-slate-400">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
