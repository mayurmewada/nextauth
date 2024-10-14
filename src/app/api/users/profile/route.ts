// module imports
import { NextRequest, NextResponse } from "next/server";
// file imports
import { dbConnect } from "@/db/connection";
import userModel from "@/models/user.model";
import { verifyToken } from "@/helpers/decodeToken";

dbConnect();

export const POST = async (request: NextRequest) => {
    try {
        const decodedData = await verifyToken(request);
        const userData = await userModel.findById({ _id: decodedData.id }).select("-password");
        return NextResponse.json({
            status: 200,
            message: "User Data found",
            userData,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Something went wrong",
        });
    }
};
