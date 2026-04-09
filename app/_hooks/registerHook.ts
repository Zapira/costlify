'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../_types/authType";
import { registerUser } from "../_services/register";
import { ServerError } from "../_types/errorType";
import axios from "axios";
import { toast } from "sonner";

export function RegisterHook() {
    const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm<RegisterFormData>();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const response = await registerUser(data);
            console.log(response.status);

            if (response.status === 'success') {
                toast.success("Registrasi berhasil! Silakan login.");
                setTimeout(() => {
                    window.location.href = "/auth/login";
                }, 2000);
            }
            return response;
        } catch (error: unknown) {
            if (axios.isAxiosError<ServerError>(error)) {
                const status = error.response?.status;

                if (status === 500) {
                    setError("root.serverError", {
                        type: "server",
                        message: error.response?.data?.message || "Terjadi kesalahan pada server",
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
        getValues,
    }
}

