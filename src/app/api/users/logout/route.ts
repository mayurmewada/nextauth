import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/connection";

dbConnect();

export const GET = async (request: NextRequest) => {
    try {
        const response = NextResponse.json({
            status: 200,
            message: "Logout Successfull",
        });

        response.cookies.set("token", "", { httpOnly: true });
        return response;
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Something went wrong from logout catch",
        });
    }
};
