import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
    const cookie = await cookies()
    const token = cookie.get("token")?.value;

    if (!token) {
        return new Response(JSON.stringify({ message: "Unauthorized" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET as string)
    return Response.json({
        user: decode
    })
}