"use client";
import { getAllUsers } from "@/redux/slices/adminSlice";
import { AppDispatch } from "@/redux/store";
import { use, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isLoading, users } = useSelector((store: any) => store.adminSlice);
    const [tableData, setTableData] = useState([null]);
    console.log(users)
    useLayoutEffect(() => {
        dispatch(getAllUsers());
    }, []);
    useEffect(() => {
        setTableData([...users]);
    }, [users.length > 0]);

    const handleSortTable = (param: string) => {
        const sortedData = [...tableData].sort((a: any, b: any) => a[param].localeCompare(b[param]));
        setTableData(sortedData);
    };

    return (
        <div className="container">
            hello protected admin
            <div>
                {isLoading ? (
                    <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="#ffffff" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                ) : (
                    <table className="border-[1px] border-Grey">
                        <tr>
                            <th onClick={() => handleSortTable("_id")} className="py-2 px-5 border-[1px] border-Grey cursor-pointer">
                                ID <i className="ri-arrow-up-down-fill"></i>
                            </th>
                            <th onClick={() => handleSortTable("email")} className="py-2 px-5 border-[1px] border-Grey cursor-pointer">
                                Email <i className="ri-arrow-up-down-fill"></i>
                            </th>
                            <th onClick={() => handleSortTable("username")} className="py-2 px-5 border-[1px] border-Grey cursor-pointer">
                                Username <i className="ri-arrow-up-down-fill"></i>
                            </th>
                        </tr>
                        {tableData && tableData.length >= 1 ? (
                            tableData.map((user: any) => (
                                <tr>
                                    <td className="py-2 px-5 border-[1px] border-Grey">{user?._id}</td>
                                    <td className="py-2 px-5 border-[1px] border-Grey">{user?.email}</td>
                                    <td className="py-2 px-5 border-[1px] border-Grey">{user?.username}</td>
                                </tr>
                            ))
                        ) : (
                            <h6>No Data found</h6>
                        )}
                    </table>
                )}
            </div>
        </div>
    );
};

export default Page;
