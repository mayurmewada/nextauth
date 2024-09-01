import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { dbConnect } from "@/db/connection";
import userModel from"@/models/user.model";
import { sendEmail } from "@/helpers/mailer";

dbConnect();

export const POST = async (request: NextRequest) => {
    try {
        const requestBody = await request.json();
        console.log(requestBody);
        const { username, email, password } = requestBody;

        const user = await userModel.findOne({ email });

        if (user) {
            return NextResponse.json({ status: 400, error: "Email already registered" });
        } else {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);
            const newUser = await userModel.create({
                username,
                email,
                password: hashedPassword,
            });
            // const userCreated = await newUser.save();
            console.log(newUser);

            await sendEmail({ email, emailType: "VERIFY", userId: newUser._id });
            return NextResponse.json({
                status: 200,
                message: "User Register Successfully",
                newUser
            });
        }
    } catch (error: any) {
        return NextResponse.json({ status: 500, error: "something went wrong" });
    }
};
