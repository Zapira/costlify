'use client'

import { AuthChecking } from "../_services/authCheck";
import { useEffect } from "react";
import { LogoutService } from "../_services/logout";
import { toast } from "sonner";

export default function DashboardHook() {

    const handlerLogout = async  () => {
        confirm("Apakah Anda yakin ingin keluar?")
        try {
            const response = await LogoutService();
            console.log(response);

            if (response.message === "Logout successful") {
                toast.success("Logout berhasil!");
                window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`;
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    useEffect(() => {
        async function checkAuthStatus() {
            try {
                await AuthChecking();
            } catch (error: unknown) {
                console.error("Authentication check failed:", error);
            }
        }
        checkAuthStatus();
    }, []);

    return {
        handlerLogout
    }
}