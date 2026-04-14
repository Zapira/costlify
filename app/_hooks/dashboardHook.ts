'use client'

import { AuthChecking } from "../_services/authCheck";
import { useEffect } from "react";
import { LogoutService } from "../_services/logout";
import { toast } from "sonner";

export default function useDashboardHook() {

    const handlerLogout = async () => {
        const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
        if (!confirmLogout) return;

        try {
            const response = await LogoutService();

            if (response.message === "Logout successful") {
                toast.success("Logout berhasil!");
                window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`;
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    useEffect(() => {
        AuthChecking();
    }, []);

    return {
        handlerLogout
    }
}