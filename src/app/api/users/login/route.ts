// module imports
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
// file imports
import { dbConnect } from "@/db/connection";
import userModel from "@/models/user.model";

dbConnect();

export const POST = async (request: NextRequest, response: NextResponse) => {
    try {
        const requestBody = await request.json();
        const { email, password } = requestBody;
        const isUserFound = await userModel.findOne({ email });
        if (isUserFound) {
            const isPasswordMatch = bcrypt.compareSync(password, isUserFound.password);
            if (isPasswordMatch) {
                const token = jwt.sign({ id: isUserFound._id, isAdmin: isUserFound.isAdmin }, process.env.SECRETKEY!, { expiresIn: 3600000 * 24 * 7 });
                const response = NextResponse.json({
                    status: 200,
                    message: "User logged in Successfully",
                    token,
                });
                response.cookies.set("NEXT_TOKEN", token, { httpOnly: true });
                return response;
            } else {
                return NextResponse.json({
                    status: 401,
                    message: "Invalid credentials",
                });
            }
        } else {
            return NextResponse.json({
                status: 404,
                message: "User not exist",
            });
        }
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "something went wrong catch error from api/users/login",
        });
    }
};
