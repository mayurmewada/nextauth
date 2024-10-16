import { dbConnect } from "@/db/connection";
import userModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export const DELETE = async (request: NextRequest, response: NextResponse) => {
    try {
        const {_id} = await request.json();
        const deletedUser = await userModel.findByIdAndDelete(_id);
        console.log(deletedUser)
        return NextResponse.json({
            status: 200,
            message: "User deleted Successfully"
        });
    } catch (error) {
        console.log("error from admin/users/delete/route", error);
    }
};
