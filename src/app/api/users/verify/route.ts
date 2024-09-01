// module imports
import { NextRequest, NextResponse } from "next/server";
// file imports
import { dbConnect } from "@/db/connection";
import userModel from "@/models/user.model";

dbConnect();

export const POST = async (request: NextRequest) => {
    try {
        const { token } = await request.json();
        console.log(token);
        const isUserFound = await userModel.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });
        if (!isUserFound) {
            return NextResponse.json({
                status: 400,
                message: "unwanted request found",
            });
        } else {
            isUserFound.isVerified = true;
            isUserFound.verifyToken = undefined;
            isUserFound.verifyTokenExpiry = undefined;
            await isUserFound.save();
            return NextResponse.json({
                status: 200,
                message: "User Verified Successfully",
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: `Something went wrong from verify catch ${error}`,
        });
    }
};
