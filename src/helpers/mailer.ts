// module imports
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
// file imports
import User from "@/models/user.model";

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 600000,
            });
        } else {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 600000,
            });
        }

        const transporter = nodemailer.createTransport({
            host: String(process.env.EMAILCRED_HOST),
            port: Number(process.env.EMAILCRED_PORT),
            auth: {
                user: process.env.EMAILCRED_USER,
                pass: process.env.EMAILCRED_PASS,
            },
        });

        const mailOption = {
            from: process.env.EMAILFROM,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your Email" : "Reset your Password",
            html:
                emailType === "VERIFY"
                    ? `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>Document</title>
                            </head>
                            <body>
                                <h2>Please Verify your account</h2>
                                <p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to verify your account</p>
                                <p>Physical link ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>
                            </body>
                        </html>`
                    : `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>Document</title>
                            </head>
                            <body>
                                <h2>Password Reset</h2>
                                <p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">here</a> to reset your password</p>
                                <p>Physical link ${process.env.DOMAIN}/resetpassword?token=${hashedToken}</p>
                            </body>
                        </html>`,
        };

        const mailResponse = await transporter.sendMail(mailOption);
        return mailResponse;
    } catch (error: any) {
        throw new error(error);
    }
};
