"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authCheck from "@/app/_services/authCheck";
import { login, logout } from "@/app/_stores/authSlice";

export default function AuthChecking() {
    const dispatch = useDispatch();
    const authState = useSelector((state: any) => state.auth);

    useEffect(() => {
        const check = async () => {
            try {
                const user = await authCheck();
                if (user) dispatch(login(user));
                else dispatch(logout());
            } catch (error) {
                console.error("Auth check failed:", error);
                dispatch(logout());
            }
        }
        check();

        console.log('redux state:', authState )
    }, [dispatch]);

    return null;
}