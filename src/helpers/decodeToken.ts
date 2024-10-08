// module imports
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const verifyToken = (request: NextRequest) => {
    const token = request.cookies.get("NEXT_TOKEN")?.value || "";
    const decodedData: any = jwt.verify(token, process.env.SECRETKEY!);
    return decodedData;
};
