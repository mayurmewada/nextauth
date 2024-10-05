"use client";
import { getProfile } from "@/redux/slices/userSlice";
import { AppDispatch, AppStore } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
    const {isLoading, user} = useSelector((store: AppStore) => store.userSlice);
    const dispatch:AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    console.log("profile", user);

    return (
        <div className="container h-[100vh]">
            <h6 className="text-center mt-12">Hello {user?.username}</h6>
        </div>
    );
};

export default Index;
