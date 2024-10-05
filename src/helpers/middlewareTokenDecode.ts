import * as jose from "jose";

export const middlewareTokenDecode = async (request: any) => {
    try {
        const token = await request;
        const secret = new TextEncoder().encode(process.env.SECRETKEY); // Ensure the secret key is a Uint8Array
        const decodedToken = await jose.jwtVerify(token, secret);

        return decodedToken.payload;
    } catch (error) {
        console.error("JWT verification error:", error);
        return null; // Return null if verification fails
    }
};
