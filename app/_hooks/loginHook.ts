'use client';

import { useForm } from "react-hook-form";
import { LoginFormData } from "../_types/authType";
import { useState } from "react";
import { loginService } from "../_services/login";
import { toast } from "sonner";
import axios from "axios";
import { ServerError } from "../_types/errorType";

export default function LoginHook() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormData>();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await loginService(data);
            console.log(response);

            if (response.status === 'success') {
                toast.success("Login berhasil!");
                window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/app/dashboard`;
            }
            return response;
        } catch (error: unknown) {
            if (axios.isAxiosError<ServerError>(error)) {
                const status = error.status;

                if (status === 401) {
                    setError("root.serverError", {
                        type: "server",
                        message: error.response?.data?.error || "Terjadi kesalahan pada server",
                    });
                }
            } else {
                setError("root.serverError", {
                    type: "server",
                    message: "Unexpected error",
                });
            }
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        showPassword,
        setShowPassword,
    }
}