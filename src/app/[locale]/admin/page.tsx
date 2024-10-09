"use client";
import { getAllUsers } from "@/redux/slices/adminSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isLoading, users } = useSelector((store: any) => store.adminSlice);
    console.log(users);
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className="container">
            hello protected admin
            <ul>
                {users.map((user: any) => (
                    <li className="flex gap-3 mb-4">
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
