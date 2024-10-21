//module imports
//file imports
import { dbConnect } from "@/db/connection";
import userModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export const GET = async (request: NextRequest, response: NextResponse) => {
    try {
        const getAllUsers = await userModel.find().select("-password")
        return NextResponse.json({
            status: 200,
            response: getAllUsers
        })
    } catch (error) {
        console.log("error from admin/users/route",error)
    }
}