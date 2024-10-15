import { dbConnect } from "@/db/connection";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export const DELETE = async (request: NextRequest, response: NextResponse) => {
    try {
        const {id} = await request.json();
        console.log(id);
        return NextResponse.json({
            data: id,
        });
    } catch (error) {
        console.log("error from admin/users/delete/route", error);
    }
};
