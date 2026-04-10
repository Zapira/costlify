import { NextRequest, NextResponse } from "next/server";


export async function proxy(req: NextRequest) {
    console.log('Proxy request received:', req.url);
    const token = req.cookies.get("access_token")?.value;
    if(!token){
        return NextResponse.redirect(new URL("/", req.url));
    }

    const authChecking = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth-check`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const authCheckingData = await authChecking.json();
    console.log('auth checking:', authCheckingData);

    if (authCheckingData.message === 'unauthorized') {
        return NextResponse.redirect(new URL("/", req.url));
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: [
        "/app/dashboard",
        "/app/produk-saya",
        "/app/produk-saya/:path*",
    ],
};
