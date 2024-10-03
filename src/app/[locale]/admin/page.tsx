"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const isAuthenticated = Cookies.get("token");

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/login");
        }
    }, []);

    return <div className="container">hello protected admin</div>;
};

export default Page;
