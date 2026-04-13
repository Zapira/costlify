import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
    const token = req.cookies.get("access_token")?.value;
    const pathname = req.nextUrl.pathname;

    const isAuthPage = pathname.startsWith("/auth");
    const isProtectedPage = pathname.startsWith("/app");

    if (!token) {
        if (isProtectedPage) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
        return NextResponse.next();
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth-check`, {
        method: "GET",
        headers: {
            Cookie: `access_token=${token}`,
        },
    });

    const isValid = res.status === 200;

    if (!isValid) {
        if (isProtectedPage) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
        return NextResponse.next();
    }

    if (isAuthPage) {
        return NextResponse.redirect(new URL("/app/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/app/:path*",
        "/auth/:path*",
    ],
};